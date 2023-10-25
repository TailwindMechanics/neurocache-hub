//path: src\modules\Textgen\External\Server\generateName.tsx

// path: src\modules\Imagen\External\Server\RandomName.tsx

"use server";

import OpenAI from "openai";

export const GenerateName = async (prompt: string) => {
    const openAI = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openAI.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                content: `Create a catchy firstname for a person described as: '${prompt}'. No camelcase please.`,
                role: "system",
            },
        ],
    });

    return completion.choices[0].message.content?.trim();
};
