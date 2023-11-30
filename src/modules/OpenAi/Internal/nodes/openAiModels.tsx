//path: src\modules\OpenAi\Internal\nodes\openAiModels.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import { useState } from "react";
import React from "react";

import { NodeSelection, UseNodeFlow, DrawHandle } from "@modules/Graph";
import { CustomNode } from "@modules/Graph/types";
import { useOpenAI } from "../hooks/useOpenAI";
import {
    ContentPreset,
    ButtonPreset,
    CardPreset,
    Composer,
} from "@modules/Composer";

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

const OpenAiModels = React.memo((props: NodeProps) => {
    const [isLoading, setIsLoading] = useState({
        loading: false,
        message: "idle",
        detail: "",
    });

    const { setNodeFlowValue } = UseNodeFlow();
    const nodeData = props.data as CustomNode;
    const openAI = useOpenAI();
    const allNodes = useReactFlow().getNodes();

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
            {nodeData.handles?.map((handle, index) => (
                <DrawHandle
                    key={index}
                    handle={handle}
                    nodeData={nodeData}
                    index={index}
                />
            ))}
            <Card className={NodeSelection(props.id, allNodes)}>
                <Header>{isLoading.message}</Header>
                <Button onClick={onClick}>Fetch Models</Button>
            </Card>
        </>
    );
});

OpenAiModels.displayName = "OpenAiModels";
export { OpenAiModels };
