//path: src\modules\OpenAi\Internal\nodes\openAiModels.tsx

import { NodeProps } from "reactflow";
import { useState } from "react";
import React from "react";

import { CustomNode } from "@modules/Graph/types";
import { useOpenAI } from "../hooks/useOpenAI";
import {
    ContentPreset,
    ButtonPreset,
    CardPreset,
    Composer,
} from "@modules/Composer";
import {
    CustomNodesRepo,
    NodeSelection,
    UseNodeFlow,
    DrawHandle,
} from "@modules/Graph";

const Card = new Composer("OpenAiModelsCard", CardPreset)
    .withRoundedFrame()
    .build();
const Header = new Composer("OpenAiModelsHeader", ContentPreset)
    .withStyle("text-aqua")
    .withStyle("text-center")
    .withStyle("w-20")
    .withRoundedElement()
    .build();
const Button = new Composer("OpenAiModelsButton", ButtonPreset)
    .withStyle("text-sm")
    .withRoundedButton()
    .build();

const OpenAiModels: React.FC<NodeProps> = (props: NodeProps) => {
    const [isLoading, setIsLoading] = useState({
        loading: false,
        message: "idle",
        detail: "",
    });

    const { setNodeFlowValue } = UseNodeFlow();
    const nodeData = props.data as CustomNode;
    const openAI = useOpenAI();

    const onClick = async () => {
        setIsLoading({
            loading: true,
            message: "Fetching...",
            detail: "",
        });
        const response = await openAI.models();
        if (!response) {
            setIsLoading({
                loading: false,
                message: "Failed",
                detail: "Response is null",
            });
            return;
        }

        setIsLoading({
            loading: false,
            message: "Fetched!",
            detail: response,
        });

        const sourceIds = nodeData.handles
            .filter((handle) => handle.type === "source")
            .map((handle) => handle.id);

        setNodeFlowValue({
            ids: sourceIds,
            payload: response,
        });
    };

    return (
        <>
            {nodeData.handles?.map((handle, index) =>
                DrawHandle({ handle, nodeData, index }),
            )}
            <Card className={NodeSelection(props.id)}>
                <Header>{isLoading.message}</Header>
                <Button onClick={onClick}>Fetch Models</Button>
            </Card>
        </>
    );
};

const reflect_nodeData = {
    nodeType: "openai_models",
    nodeName: "Models",
    category: "OpenAi",
    nodeId: "openai_models_60e9b8e9a7f1d8c7gdw3",
    body: "This node returns the models.",
    handles: [
        {
            id: "out_openai_models_60e9b8e9a7f1d8c7gdw3",
            type: "source",
            offset: { x: 100.33, y: 40 },
            angle: 90,
        },
    ],
    nodePosition: { x: 100, y: 0 },
} as CustomNode;

export default React.memo(OpenAiModels);
