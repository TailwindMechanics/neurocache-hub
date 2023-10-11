//path: src\modules\NeuroGraph\nodes\sendOutputNode.tsx

import React, { useState } from "react";
import { NodeProps } from "reactflow";

import { NodeSelectionState, DrawHandle } from "..";
import Components from "@client/components";
import { NodeData } from "@shared/types";
import Use from "@client/hooks";

const Button = new Components.Builder(Components.Button)
    .withRoundedButton()
    .build();
const Input = new Components.Builder(Components.Input.Default)
    .withRoundedElement()
    .build();

const SendOutputNode: React.FC<NodeProps> = (props: NodeProps) => {
    const [inputText, setInputText] = useState("");
    const { setNodeFlowValue } = Use.NodeFlow();
    const nodeData = props.data as NodeData;

    return (
        <>
            {nodeData.handles?.map((handle, index) =>
                DrawHandle({ handle, nodeData, index }),
            )}
            <Components.Card className={NodeSelectionState(props.id)}>
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
            </Components.Card>
        </>
    );
};

export default React.memo(SendOutputNode);
