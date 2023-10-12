//path: src\modules\Graph\Internal\components\inputBox.tsx

import { useEffect, useState } from "react";
import { NodeProps } from "reactflow";
import React from "react";

import { sendOutput, extractInput } from "../utils/nodeFlowUtils";
import { NodeSelectionState } from "../utils/nodeSelectionState";
import CustomNodesRepo from "../core/CustomNodesRepo";
import { useNodeFlow } from "../hooks/useNodeFlow";
import { DrawHandle } from "../utils/drawHandle";
import IComposer from "@modules/Composer";
import { CustomNode } from "../../types";

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
    const nodeData = props.data as CustomNode;

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

const nodeData = {
    nodeType: "input_box",
    nodeName: "Text",
    category: "Utils",
    nodeId: "node_input_box_60e9b8e9a7f1d8c7c7f7",
    body: "This node displays input payload it receives.",
    nodePosition: { x: 50, y: 0 },
    handles: [
        {
            id: "in_input_box_60e9b8e9a7f1d8c7c7f7",
            type: "target",
            offset: { x: -0.33, y: 40 },
            angle: -90,
        },
        {
            id: "out_input_box_60e9b8e9a7f1d8c7c7f7",
            type: "source",
            offset: { x: 100.33, y: 40 },
            angle: 90,
        },
    ],
    nodeComponent: InputBox,
} as CustomNode;

CustomNodesRepo.instance.addNode(nodeData);

export default React.memo(InputBox);
