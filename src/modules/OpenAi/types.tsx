//path: src\modules\OpenAi\types.tsx

import { ReactNode } from "react";

export type OpenAIContextType = {
    chat: (messages: any[]) => Promise<string>;
    models: () => Promise<string>;
} | null;

export type OpenAIContextProviderProps = {
    children: ReactNode;
};
