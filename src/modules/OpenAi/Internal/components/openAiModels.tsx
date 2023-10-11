//path: src\modules\OpenAi\Internal\components\openAiModels.tsx

import { NodeProps } from "reactflow";
import { useState } from "react";
import React from "react";

import { NodeData } from "@modules/Graph/types";
import IComposer from "@modules/Composer";
import IOpenAi from "@modules/OpenAi";
import IGraph from "@modules/Graph";

const Card = new IComposer.Builder(IComposer.Components.Card)
    .withRoundedFrame()
    .build();
const Header = new IComposer.Builder(IComposer.Components.Content)
    .withStyle("text-aqua")
    .withStyle("text-center")
    .withStyle("w-20")
    .withRoundedElement()
    .build();
const Button = new IComposer.Builder(IComposer.Components.Button)
    .withStyle("text-sm")
    .withRoundedButton()
    .build();

const OpenAiModels: React.FC<NodeProps> = (props: NodeProps) => {
    const { setNodeFlowValue } = IGraph.useNodeFlow();
    const nodeData = props.data as NodeData;
    const openAI = IOpenAi.useOpenAi();

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
                IGraph.DrawHandle({ handle, nodeData, index }),
            )}
            <Card className={IGraph.NodeSelectionState(props.id)}>
                <Header>{isLoading.message}</Header>
                <Button onClick={onClick}>Fetch Models</Button>
            </Card>
        </>
    );
};

export default React.memo(OpenAiModels);
