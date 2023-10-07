//path: src\components\client\reactflow\nodes\inputBox.tsx

import { extractInput, sendOutput } from "../utils/nodeFlowUtils";
import NodeSelectionState from "../utils/nodeSelectionState";
import ComponentBuilder from "../../ui/ComponentBuilder";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import ContentPreset from "../../ui/contentPreset";
import { NodeData } from "@src/types/nodeData";
import CardPreset from "../../ui/cardPreset";
import DrawHandle from "../utils/drawHandle";
import { useEffect, useState } from "react";
import { NodeProps } from "reactflow";
import React from "react";

const Card = new ComponentBuilder(CardPreset)
	.withStyle("h-32")
	.withStyle("w-44")
	.build();

const Content = new ComponentBuilder(ContentPreset)
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
	}, [nodeFlowValue]);

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
