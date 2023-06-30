// src\app\api\book-library\get-by-id\route.ts
import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";
import { z } from "zod";


// Define the schema of the request query
const getBookValidator = z.object({
  id: z.string(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = getBookValidator.parse(req.query);

    // Get the book from the database
    const { rows } = await sql`
      SELECT * FROM books
      WHERE id=${id}`;

    if (rows.length === 0) {
      res.status(404).json({ message: "No book found with this ID." });
      return;
    }

    // Return the found book
    res.status(200).json(rows[0]);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(422).json({ message: "Invalid request query" });
      return;
    }

    res.status(400).json({ message: "Invalid request" });
  }
}