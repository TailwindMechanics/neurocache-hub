//path: src\modules\Agents\External\Server\createAvatar.tsx

"use server";

import { Agent } from "../../types";
import OpenAI from "openai";

export const CreateAvatar = async (agent: Agent): Promise<string[]> => {
    const openAI = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const avatarPrompt = CreateAvatarPrompt(agent);
    const response = await openAI.images.generate({
        prompt: avatarPrompt,
        response_format: "url",
    });

    const imageUrls = response.data.map((image: any) => image.url);
    return imageUrls;
};

const CreateAvatarPrompt = (agent: Agent): string => {
    return `Pixel art portrait of ${agent.persona}, 
    named ${agent.name}, drawing inspiration from 'Thimbleweed Park'. 
    The profile picture crops in and focuses on the face.`;
};
