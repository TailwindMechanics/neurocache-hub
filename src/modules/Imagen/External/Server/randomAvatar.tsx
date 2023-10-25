//path: src\modules\Imagen\External\Server\randomAvatar.tsx

"use server";

import OpenAI from "openai";

import { RandomPrompt } from "../../Internal/data/avatarPrompt";
import { AvatarResponse } from "@modules/Imagen/types";

export const RandomAvatar = async () => {
    const openAI = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const avatarPrompt = RandomPrompt();
    console.log(avatarPrompt.prompt);

    const response = await openAI.images.generate({
        prompt: avatarPrompt.prompt,
        response_format: "url",
    });

    const images = response.data;
    const imageUrls = images.map((image: any) => image.url);
    return { avatarPrompt, imageUrls } as AvatarResponse;
};
