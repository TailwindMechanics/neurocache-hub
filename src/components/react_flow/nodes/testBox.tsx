//path: src\components\react_flow\nodes\testBox.tsx

import TextBlockFormatter from "@src/components/components/textBlockFormatter";
import ComponentBuilder from "@src/components/components/ComponentBuilder";
import ContentPreset from "@src/components/components/contentPreset";
import ButtonPreset from "@src/components/components/buttonPreset";
import { extractInput, sendOutput } from "../utils/nodeFlowUtils";
import InputPreset from "@src/components/components/inputPreset";
import CardPreset from "@src/components/components/cardPreset";
import NodeSelectionState from "../utils/nodeSelectionState";
import { useAgentGraphs } from "@src/hooks/useAgentGraphs";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import { useEffect, useState } from "react";
import { NodeProps } from "reactflow";
import React from "react";

const Card = new ComponentBuilder(CardPreset).withRoundedFrame().build();

const Content = new ComponentBuilder(ContentPreset)
	.withStyle("text-night-body")
	.withStyle("bg-night-light")
	.withStyle("break-words")
	.withStyle("text-xs")
	.withStyle("w-80")
	.withStyle("h-60")
	.withRoundedButton()
	.build();

const Button = new ComponentBuilder(ButtonPreset)
	.withStyle("text-sm")
	.withRoundedElement()
	.build();

const Input = new ComponentBuilder(InputPreset)
	.withStyle("text-center")
	.withRoundedElement()
	.build();

const TestBox: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputBoxText, setinputLabelText] = useState("Text");
	const [contentText, setContentText] = useState("Content");
	const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
	const nodeData = props.data as NodeData;
	const agentGraphs = useAgentGraphs();

	const onClick = async () => {
		setContentText(inputBoxText);
		const response = await agentGraphs.save(inputBoxText);
		console.log(response);

		// @ts-ignore
		setContentText(response.error.details);
	};

	useEffect(() => {
		console.log(contentText);
	}, [contentText]);

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
				<Input
					value={inputBoxText}
					onChange={(e) => setinputLabelText(e.target.value)}
				></Input>
				<Button onClick={onClick}>Test</Button>
				<Content>
					<TextBlockFormatter
						className="bg-night-light"
						separator={/\.js:\d+:\d+\)\s/g}
						itemClassName="px-1 mb-0.5 bg-night-black rounded"
						text={contentText}
					/>
				</Content>
			</Card>
		</>
	);
};

export default React.memo(TestBox);
