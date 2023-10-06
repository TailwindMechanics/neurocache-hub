//path: src\components\react_flow\nodes\inputBox.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import ContentPreset from "@src/components/components/contentPreset";
import { extractInput, sendOutput } from "../utils/nodeFlowUtils";
import CardPreset from "@src/components/components/cardPreset";
import NodeSelectionState from "../utils/nodeSelectionState";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import { NodeData } from "@src/types/nodeData";
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
