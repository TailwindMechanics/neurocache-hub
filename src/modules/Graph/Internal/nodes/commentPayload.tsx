//path: src\modules\Graph\Internal\nodes\commentPayload.tsx

import React, { useEffect, useState } from "react";
import { NodeProps } from "reactflow";

import { CardPreset, Composer, InputPreset } from "@modules/Composer";
import { NodeSelectionState } from "../components/nodeSelectionState";
import { sendOutput } from "../utils/nodeFlowUtils";
import { useNodeFlow } from "../hooks/useNodeFlow";
import DrawHandle from "../components/drawHandle";
import { CustomNode } from "../../types";

const Input = new Composer("CommentInput", InputPreset)
    .withRoundedButton()
    .build();

export const CommentPayload: React.FC<NodeProps> = (props: NodeProps) => {
    const [inputText, setInputText] = useState("");
    const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
    const nodeData = props.data as CustomNode;
    useEffect(() => {
        const newValue = nodeFlowValue;
        newValue.payload = `${inputText}: {${nodeFlowValue.payload}}`;
        sendOutput(nodeData, newValue, setNodeFlowValue);
    }, [inputText, nodeData, nodeFlowValue, setNodeFlowValue]);

    return (
        <>
            {nodeData.handles?.map((handle, index) =>
                DrawHandle({ handle, nodeData, index }),
            )}
            <CardPreset className={NodeSelectionState(props.id)}>
                <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            </CardPreset>
        </>
    );
};

const reflect_nodeData = {
    nodeType: "comment_payload",
    nodeName: "Comment Payload",
    category: "Utils",
    nodeId: "comment_payload_60e9b8e9a7f1d8c7dsa2",
    body: "This node returns the models.",
    handles: [
        {
            id: "in_comment_payload_60e9b8e9a7f1d8c7dsa2",
            type: "target",
            offset: { x: -0.33, y: 40 },
            angle: -90,
        },
        {
            id: "out_comment_payload_60e9b8e9a7f1d8c7dsa2",
            type: "source",
            offset: { x: 100.33, y: 40 },
            angle: 90,
        },
    ],
    nodePosition: { x: 100, y: 0 },
    nodeComponent: CommentPayload,
} as CustomNode;
