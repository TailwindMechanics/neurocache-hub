//path: src\modules\Graph\Internal\nodes\commentPayload.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import React, { useEffect, useState } from "react";

import { CardPreset, Composer, InputPreset } from "@modules/Composer";
import { NodeSelectionState } from "../components/nodeSelectionState";
import { DrawHandle } from "../components/drawHandle";
import { sendOutput } from "../utils/nodeFlowUtils";
import { useNodeFlow } from "../hooks/useNodeFlow";
import { CustomNode } from "../../types";

const Input = new Composer("CommentInput", InputPreset)
    .withRoundedButton()
    .build();

const CommentPayload = React.memo((props: NodeProps) => {
    const [inputText, setInputText] = useState("");
    const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
    const nodeData = props.data as CustomNode;
    const allNodes = useReactFlow().getNodes();

    useEffect(() => {
        const newValue = nodeFlowValue;
        newValue.payload = `${inputText}: {${nodeFlowValue.payload}}`;
        sendOutput(nodeData, newValue, setNodeFlowValue);
    }, [inputText, nodeData, nodeFlowValue, setNodeFlowValue]);
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
            <CardPreset className={NodeSelectionState(props.id, allNodes)}>
                <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            </CardPreset>
        </>
    );
});

CommentPayload.displayName = "CommentPayload";
export { CommentPayload };
