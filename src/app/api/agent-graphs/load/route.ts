//path: src\app\api\agent-graphs\load\route.ts

import { supabase } from "@src/services/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		const { data, error } = await supabase
			.from("my_table")
			.insert(req.body);

		if (error) return res.status(500).json({ error: error.message });
		return res.status(200).json({ data });
	}

	if (req.method === "GET") {
		const { data, error } = await supabase.from("my_table").select();

		if (error) return res.status(500).json({ error: error.message });
		return res.status(200).json({ data });
	}

	if (req.method === "PUT") {
		const { data, error } = await supabase
			.from("my_table")
			.update(req.body)
			.match({ id: req.query.id });

		if (error) return res.status(500).json({ error: error.message });
		return res.status(200).json({ data });
	}

	if (req.method === "DELETE") {
		const { data, error } = await supabase
			.from("my_table")
			.delete()
			.match({ id: req.query.id });

		if (error) return res.status(500).json({ error: error.message });
		return res.status(200).json({ data });
	}

	return res.status(405).json({ error: "Method not allowed" });
}
