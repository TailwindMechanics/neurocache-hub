//path: src\modules\NeuroGraph\nodes\inputBox.tsx

import { useEffect, useState } from "react";
import { NodeProps } from "reactflow";
import React from "react";

import { NodeSelectionState, extractInput, DrawHandle, sendOutput } from "..";
import Components from "@client/components";
import { NodeData } from "@shared/types";
import Use from "@client/hooks";

const Card = new Components.Builder(Components.Card)
	.withStyle("h-32")
	.withStyle("w-44")
	.build();

const Content = new Components.Builder(Components.Content)
	.withStyle("text-night-body")
	.withStyle("text-ss")
	.withStyle("px-1")
	.withRoundedButton()
	.build();

const InputBox: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputBoxText, setinputLabelText] = useState("Text");
	const { nodeFlowValue, setNodeFlowValue } = Use.NodeFlow();
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
