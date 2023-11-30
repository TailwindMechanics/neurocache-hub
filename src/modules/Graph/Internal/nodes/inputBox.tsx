//path: src\modules\Graph\Internal\nodes\inputBox.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import { useEffect, useState } from "react";
import React from "react";

import { CardPreset, Composer, ContentPreset } from "@modules/Composer";
import { NodeSelectionState } from "../components/nodeSelectionState";
import { sendOutput, extractInput } from "../utils/nodeFlowUtils";
import { DrawHandle } from "../components/drawHandle";
import { useNodeFlow } from "../hooks/useNodeFlow";
import { CustomNode } from "../../types";

const Card = new Composer("InputCard", CardPreset)
    .withStyle("h-32")
    .withStyle("w-44")
    .build();
const Content = new Composer("InputContent", ContentPreset)
    .withStyle("text-night-body")
    .withStyle("text-ss")
    .withStyle("px-1")
    .withRoundedButton()
    .build();

const InputBox = React.memo((props: NodeProps) => {
    const [inputBoxText, setinputLabelText] = useState("Text");
    const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
    const nodeData = props.data as CustomNode;
    const allNodes = useReactFlow().getNodes();

    useEffect(() => {
        sendOutput(nodeData, nodeFlowValue, setNodeFlowValue);
        const input = extractInput(nodeData, nodeFlowValue);
        if (input) setinputLabelText(input);
    }, [nodeData, nodeFlowValue, setNodeFlowValue]);

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
            <Card className={NodeSelectionState(props.id, allNodes)}>
                <Content>{inputBoxText}</Content>
            </Card>
        </>
    );
});

InputBox.displayName = "InputBox";
export { InputBox };
