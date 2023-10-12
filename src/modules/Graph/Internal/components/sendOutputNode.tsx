//path: src\modules\Graph\Internal\components\sendOutputNode.tsx

import React, { useState } from "react";
import { NodeProps } from "reactflow";

import { NodeSelectionState } from "../utils/nodeSelectionState";
import CustomNodesRepo from "../core/CustomNodesRepo";
import { useNodeFlow } from "../hooks/useNodeFlow";
import { DrawHandle } from "../utils/drawHandle";
import IComposer from "@modules/Composer";
import { CustomNode } from "../../types";

const Button = new IComposer.Builder(IComposer.Components.Button)
    .withRoundedButton()
    .build();
const Input = new IComposer.Builder(IComposer.Components.Input.Default)
    .withRoundedElement()
    .build();

const SendOutputNode: React.FC<NodeProps> = (props: NodeProps) => {
    const [inputText, setInputText] = useState("");
    const { setNodeFlowValue } = useNodeFlow();
    const nodeData = props.data as CustomNode;

    return (
        <>
            {nodeData.handles?.map((handle, index) =>
                DrawHandle({ handle, nodeData, index }),
            )}
            <IComposer.Components.Card className={NodeSelectionState(props.id)}>
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
            </IComposer.Components.Card>
        </>
    );
};

const nodeData = {
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

CustomNodesRepo.instance.addNode(nodeData);

export default React.memo(SendOutputNode);
