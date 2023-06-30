import { db } from '@vercel/postgres';
import { z } from 'zod';

const addBookValidator = z.object({
    title: z.string(),
    author: z.string(),
    genre: z.string(),
});

export async function POST(req: Request) {
    const body = await req.json()
    const { title, author, genre } = addBookValidator.parse(body);
    const client = await db.connect();

    // Check if book with same title and author already exists
    const existingBook = await client.sql`SELECT * FROM books WHERE title=${title} AND author=${author};`;
    
    if (existingBook.rows.length > 0) {
        // Book already exists, return OK without inserting
        return new Response(`${title} already exists`, { status: 200 })
    }
    
    try {
        await client.sql`INSERT INTO books (title, author, genre) VALUES (${title}, ${author}, ${genre});`;
    } catch (error) {
        return new Response(`${error}`, { status: 500 })
    }

    return new Response(`Succsessfully added ${title}`, { status: 200 })
}
