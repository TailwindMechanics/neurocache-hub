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
	// if (!token) {
	// 	return new Response("No Authorization token found", { status: 401 });
	// }

	// const user = await supabase.auth.getUser(token);
	// const { data: session, error: sessionError } = user;
	// if (sessionError || !session) {
	// 	return new Response(sessionError?.message || "Invalid session", {
	// 		status: 401,
	// 	});
	// }

	// let thing = await supabase.from("agent_graphs").select("*");

	let poop = await supabase.from("agent_graphs").select("graph_data");

	// const { parsedGraph } = graphValidator.parse(json);
	// const { data, error } = await supabase
	// 	.from("agent_graphs")
	// 	.insert({ user_id: user, graph_data: json })
	// 	.select();

	console.log(poop);

	const json = JSON.stringify(poop);
	console.log("json:", json);

	return new Response(json, { status: 200 });
}
