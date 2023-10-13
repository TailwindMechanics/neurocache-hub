//path: src\modules\OpenAi\index.tsx

import { OpenAIContextProvider } from "./Internal/hooks/useOpenAI";
import openAiModels from "./Internal/components/openAiModels";
import openAiNode from "./Internal/components/openAiNode";
import { useOpenAI } from "./Internal/hooks/useOpenAI";

export function IOpenAiInit() {
    for (const key in IOpenAi) {
        console.log(key);
    }
}

namespace IOpenAi {
    export const Context = OpenAIContextProvider;
    export const ChatNode = openAiNode;
    export const ModelsNode = openAiModels;
    export const useOpenAi = useOpenAI;
}

export default IOpenAi;
