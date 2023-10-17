//path: src\modules\Graph\Internal\nodes\sendOutputNode.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import React, { useState } from "react";

import { NodeSelectionState } from "../components/nodeSelectionState";
import { DrawHandle } from "../components/drawHandle";
import { useNodeFlow } from "../hooks/useNodeFlow";
import { CustomNode } from "../../types";
import {
    ButtonPreset,
    InputPreset,
    CardPreset,
    Composer,
} from "@modules/Composer";

const Button = new Composer("SendOutputButton", ButtonPreset)
    .withRoundedButton()
    .build();
const Input = new Composer("SendOutputInput", InputPreset)
    .withRoundedElement()
    .build();

const SendOutputNode = React.memo((props: NodeProps) => {
    const [inputText, setInputText] = useState("");
    const { setNodeFlowValue } = useNodeFlow();
    const nodeData = props.data as CustomNode;
    const allNodes = useReactFlow().getNodes();

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
                <Button
                    onClick={() => {
                        const sourceIds = nodeData.handles
                            .filter((handle) => handle.type === "source")
                            .map((handle) => handle.id);

                        setNodeFlowValue({
                            ids: sourceIds,
                            payload: inputText,
                        });
                    }}>
                    Send
                </Button>
            </CardPreset>
        </>
    );
});

const reflect_nodeData = {
    nodeType: "send_output",
    nodeName: "Send Button",
    category: "Utils",
    nodeId: "node_button_output_60e9b8e9a7f1d8c7c7f6",
    body: "This node outputs the InputField text when the Button is clicked.",
    handles: [
        {
            id: "in_button_output_60e9b8e9a7f1d8c7c7f6",
            type: "target",
            offset: { x: -0.33, y: 40 },
            angle: -90,
        },
        {
            id: "out_button_output_60e9b8e9a7f1d8c7c7f6",
            type: "source",
            offset: { x: 100.33, y: 40 },
            angle: 90,
        },
    ],
    nodePosition: { x: 0, y: 0 },
    nodeComponent: SendOutputNode,
} as CustomNode;

SendOutputNode.displayName = "SendOutputNode";
export { SendOutputNode };
