//path: src\app\api\open-ai\chat\route.ts

import { ChatCompletionMessage } from "openai/resources/chat";
import OpenAI from "openai";
import { z } from "zod";

const openAiValidator = z.object({
	parsed: z.array(
		z.object({
			role: z.string(),
			content: z.string(),
		}),
	),
});

export async function POST(req: Request) {
	const json = await req.json();
	const { parsed } = openAiValidator.parse(json);
	const messages = parsed.map(
		(message: any) =>
			({
				content: message.content,
				role: message.role,
			}) as ChatCompletionMessage,
	);

	const openAI = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY,
	});

	const completion = await openAI.chat.completions.create({
		model: "gpt-4",
		messages: messages,
	});

	return new Response(completion.choices[0].message.content, { status: 200 });
}
