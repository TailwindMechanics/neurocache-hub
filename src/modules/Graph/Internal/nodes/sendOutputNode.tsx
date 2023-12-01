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
import { DrawerElement } from "@modules/Drawer/types";
import NodeInspector from "../components/nodeInspector";
import { useDrawer } from "@modules/Drawer";
import { onDoubleClick } from "../utils/nodeInspector";

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
    const { openDrawer } = useDrawer();

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
            <CardPreset
                onDoubleClick={() => onDoubleClick(nodeData, openDrawer)}
                className={NodeSelectionState(props.id, allNodes)}>
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
