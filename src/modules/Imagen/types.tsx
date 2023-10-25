//path: src\modules\Imagen\types.tsx

import OpenAI from "openai";

export interface AvatarResponse {
    imageUrls: string[];
    avatarPrompt: AvatarPrompt;
}

export interface AvatarPrompt {
    description: string;
    expression: string;
    prompt: string;
}
