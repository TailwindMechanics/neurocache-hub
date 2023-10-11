//path: src\modules\Graph\Internal\components\inputBox.tsx

import { useEffect, useState } from "react";
import { NodeProps } from "reactflow";
import React from "react";

import { sendOutput, extractInput } from "../utils/nodeFlowUtils";
import { NodeSelectionState } from "../utils/nodeSelectionState";
import { useNodeFlow } from "../hooks/useNodeFlow";
import { DrawHandle } from "../utils/drawHandle";
import IComposer from "@modules/Composer";
import { NodeData } from "../../types";

const Card = new IComposer.Builder(IComposer.Components.Card)
    .withStyle("h-32")
    .withStyle("w-44")
    .build();

const Content = new IComposer.Builder(IComposer.Components.Content)
    .withStyle("text-night-body")
    .withStyle("text-ss")
    .withStyle("px-1")
    .withRoundedButton()
    .build();

const InputBox: React.FC<NodeProps> = (props: NodeProps) => {
    const [inputBoxText, setinputLabelText] = useState("Text");
    const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
    const nodeData = props.data as NodeData;

    useEffect(() => {
        sendOutput(nodeData, nodeFlowValue, setNodeFlowValue);
        const input = extractInput(nodeData, nodeFlowValue);
        if (input) setinputLabelText(input);
    }, [nodeData, nodeFlowValue, setNodeFlowValue]);

    return (
        <>
            {nodeData.handles?.map((handle, index) =>
                DrawHandle({ handle, nodeData, index }),
            )}
            <Card className={NodeSelectionState(props.id)}>
                <Content>{inputBoxText}</Content>
            </Card>
        </>
    );
};

export default React.memo(InputBox);
