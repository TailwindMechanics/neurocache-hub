//path: src\modules\Graph\Internal\components\sendOutputNode.tsx

import React, { useState } from "react";
import { NodeProps } from "reactflow";

import { NodeSelectionState } from "../utils/nodeSelectionState";
import { useNodeFlow } from "../hooks/useNodeFlow";
import { DrawHandle } from "../utils/drawHandle";
import IComposer from "@modules/Composer";
import { NodeData } from "../../types";

const Button = new IComposer.Builder(IComposer.Components.Button)
    .withRoundedButton()
    .build();
const Input = new IComposer.Builder(IComposer.Components.Input.Default)
    .withRoundedElement()
    .build();

const SendOutputNode: React.FC<NodeProps> = (props: NodeProps) => {
    const [inputText, setInputText] = useState("");
    const { setNodeFlowValue } = useNodeFlow();
    const nodeData = props.data as NodeData;

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

export default React.memo(SendOutputNode);
