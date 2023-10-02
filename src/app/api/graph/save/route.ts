//path: src\app\api\graph\save\route.ts

import { supabase } from "@src/services/supabaseClient";
import { z } from "zod";

const graphValidator = z.object({
	parsedGraph: z.any(),
});

export async function POST(req: Request) {
	const json = await req.json();
	const { parsedGraph } = graphValidator.parse(json);

	const { data, error } = await supabase
		.from("graphs")
		.insert([{ graph: parsedGraph }]);

	if (error) {
		return new Response(error.message, { status: 400 });
	}

	return new Response(JSON.stringify(data), { status: 200 });
}
