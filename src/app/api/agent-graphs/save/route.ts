//path: src\app\api\agent-graphs\save\route.ts

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs/";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// const graphValidator = z.object({
// 	parsedGraph: z.any(),
// });
export async function POST(req: NextRequest, res: NextResponse) {
	console.log(
		">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> POST /api/agent-graphs/save",
	);

	// Debug: Output the req and res objects
	// console.log("Request object:", req);
	// console.log("Response object:", res);

	const supabase = createMiddlewareClient(
		{ req, res },
		{
			supabaseUrl: SUPABASE_URL,
			supabaseKey: SUPABASE_KEY,
		},
	);

	const token = req.headers.get("Authorization")?.split(" ")[1];
	if (!token) {
		return new Response("No Authorization token found", { status: 401 });
	}

	const user = await supabase.auth.getUser(token);
	const { data: session, error: sessionError } = user;
	if (sessionError || !session) {
		return new Response(sessionError?.message || "Invalid session", {
			status: 401,
		});
	}

	const json = await req.json();
	// const { parsedGraph } = graphValidator.parse(json);
	const { data, error } = await supabase
		.from("agent_graphs")
		.insert({ user_id: user, graph_data: json })
		.select();

	if (error) {
		return new Response(error.message, { status: 400 });
	}

	return new Response(JSON.stringify(data), { status: 200 });
}
