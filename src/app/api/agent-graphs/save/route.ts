//path: src\app\api\agent-graphs\save\route.ts

import { supabase } from "@src/services/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
	const agentGraph = req.body;
	if (!agentGraph) {
		return res.status(400).json({ error: "Failed to parse agentGraph" });
	}

	const { data, error } = await supabase
		.from("agent_graphs")
		.upsert([agentGraph])
		.select();

	if (error) return res.status(500).json({ error: error.message });
	return res.status(200).json({ data });
}
