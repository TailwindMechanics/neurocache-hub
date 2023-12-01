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

SendOutputNode.displayName = "SendOutputNode";
export { SendOutputNode };
