//path: src\modules\Graph\Internal\components\commentPayload.tsx

import React, { useEffect, useState } from "react";
import { NodeProps } from "reactflow";

import { NodeSelectionState } from "../utils/nodeSelectionState";
import { sendOutput } from "../utils/nodeFlowUtils";
import { useNodeFlow } from "../hooks/useNodeFlow";
import { DrawHandle } from "../utils/drawHandle";
import IComposer from "@modules/Composer";
import { NodeData } from "../../types";

const Input = new IComposer.Builder(IComposer.Components.Input.Default)
    .withRoundedButton()
    .build();

const CommentPayload: React.FC<NodeProps> = (props: NodeProps) => {
    const [inputText, setInputText] = useState("");
    const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
    const nodeData = props.data as NodeData;

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
            <IComposer.Components.Card className={NodeSelectionState(props.id)}>
                <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            </IComposer.Components.Card>
        </>
    );
};

export default React.memo(CommentPayload);
