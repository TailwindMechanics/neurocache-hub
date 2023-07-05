//path: src\app\api\book-library\get-by-id\route.ts

import { db } from '@vercel/postgres';
import type { Book } from "@/types"
import { kv } from '@vercel/kv';
import { z } from 'zod';


// Define the schema of the request query
const getBookValidator = z.object({
  id: z.string(),
});

export async function GET(req: Request) {
  try {
    const query = new URLSearchParams(req.url?.split('?')[1]);
    const { id } = getBookValidator.parse({ id: query.get('id') });

    // Try to get the book from KV store
    const bookInCache = await kv.get<Book>(id);
    
    if (bookInCache !== null) {
      return new Response(JSON.stringify({
          message: `Retrieved ${bookInCache.title} from cache`,
          book: bookInCache
      }), { status: 200 });
    }

    // If book is not in KV store, get it from the database
    const client = await db.connect();
    const { rows } = await client.sql`SELECT * FROM books WHERE id=${id}`;

    if (rows.length === 0) {
      return new Response(`No book found with this ID ${id}.`, { status: 404 });
    }

    // Add the retrieved book to the cache for future requests
    await kv.set(id, rows[0]);
    
    // Return the found book
    const book = rows[0];
    return new Response(JSON.stringify(book), { status: 200 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(`${error}`, { status: 422 });
    }

    return new Response(`${error}`, { status: 400 });
  }
}