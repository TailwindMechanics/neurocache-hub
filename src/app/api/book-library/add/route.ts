// src\app\api\book-library\add\route.ts
import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";
import { z } from "zod";

// Define the schema of the request body
const addBookValidator = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.string(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { title, author, genre } = addBookValidator.parse(req.body);

    // Insert the new book into the database
    const { rowCount } = await sql`
      INSERT INTO books (title, author, genre)
      VALUES (${title}, ${author}, ${genre})`;

    if (rowCount === 0) {
      res.status(500).json({ message: "Failed to add book." });
      return;
    }

    res.status(200).json({ message: "Book added successfully." });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(422).json({ message: "Invalid request payload" });
      return;
    }

    res.status(400).json({ message: "Invalid request" });
  }
}