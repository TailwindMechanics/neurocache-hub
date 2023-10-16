//path: src\app\api\open-ai\models\route.ts

import OpenAI from "openai";

export async function POST() {
    const openAI = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openAI.models.list();
    // assemble list of unique model names only
    const modelNames = new Set();
    for (const model of response.data) {
        modelNames.add(model.id);
    }
    // convert set to array
    const arr = Array.from(modelNames);
    const json = JSON.stringify(arr);

    return new Response(json, { status: 200 });
}
