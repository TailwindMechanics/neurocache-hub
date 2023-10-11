//path: src\modules\OpenAi\index.tsx

import { OpenAIContextProvider } from "./Internal/hooks/useOpenAI";
import openAiModels from "./Internal/components/openAiModels";
import openAiNode from "./Internal/components/openAiNode";
import { useOpenAI } from "./Internal/hooks/useOpenAI";

interface OpenAi {
    Context: typeof OpenAIContextProvider;
    ChatNode: typeof openAiNode;
    ModelsNode: typeof openAiModels;
    useOpenAi: typeof useOpenAI;
}

const IOpenAi: OpenAi = {
    Context: OpenAIContextProvider,
    ChatNode: openAiNode,
    ModelsNode: openAiModels,
    useOpenAi: useOpenAI,
};

export default IOpenAi;
