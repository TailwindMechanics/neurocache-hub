//path: src\modules\NeuroGraph\nodes\openAiModels.tsx

import { NodeProps } from "reactflow";
import { useState } from "react";
import React from "react";

import { DrawHandle, NodeSelectionState } from "../../../NeuroGraph/External";
import Components from "@client/components";
import { NodeData } from "@shared/types";
import Use from "@client/hooks";

const Card = new Components.Builder(Components.Card).withRoundedFrame().build();
const Header = new Components.Builder(Components.Content)
    .withStyle("text-aqua")
    .withStyle("text-center")
    .withStyle("w-20")
    .withRoundedElement()
    .build();
const Button = new Components.Builder(Components.Button)
    .withStyle("text-sm")
    .withRoundedButton()
    .build();

const OpenAiModels: React.FC<NodeProps> = (props: NodeProps) => {
    const { setNodeFlowValue } = Use.NodeFlow();
    const nodeData = props.data as NodeData;
    const openAI = Use.OpenAi();

    const [isLoading, setIsLoading] = useState({
        loading: false,
        message: "idle",
        detail: "",
    });

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
            <Card className={NodeSelectionState(props.id)}>
                <Header>{isLoading.message}</Header>
                <Button onClick={onClick}>Fetch Models</Button>
            </Card>
        </>
    );
};

export default React.memo(OpenAiModels);
