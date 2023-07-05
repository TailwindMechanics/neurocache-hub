//path: src\app\api\book-library\add\route.ts

import { db } from '@vercel/postgres';
import { kv } from '@vercel/kv';
import { z } from 'zod';


const addBookValidator = z.object({
    title: z.string(),
    author: z.string(),
    genre: z.string(),
});

export async function POST(req: Request) {
    const body = await req.json();
    const { title, author, genre } = addBookValidator.parse(body);
    const client = await db.connect();

    // Check if book with same title and author already exists
    const existingBook = await client.sql`SELECT * FROM books WHERE title=${title} AND author=${author};`;
    
    if (existingBook.rows.length > 0) {
        // Book already exists, return OK without inserting
        return new Response(`${title} already exists`, { status: 200 })
    }
    
    try {
        // Insert the new book into the database and get the returned ID
        const { rows: newBookRows } = await client.sql`
            INSERT INTO books (title, author, genre) 
            VALUES (${title}, ${author}, ${genre}) 
            RETURNING *;`;
        
        if (newBookRows.length > 0) {
            const newBook = newBookRows[0];

            // Add the new book to the KV store
            await kv.set(newBook.id, newBook);
        }
        
    } catch (error) {
        return new Response(`${error}`, { status: 500 })
    }

    return new Response(`Successfully added ${title}`, { status: 200 });
}