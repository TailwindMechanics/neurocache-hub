//path: src\components\react_flow\nodes\testBox.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import { extractInput, sendOutput } from "../utils/nodeFlowUtils";
import NodeSelectionState from "../utils/nodeSelectionState";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import { useEffect, useState } from "react";
import { NodeProps } from "reactflow";
import React from "react";
import ButtonAtom from "@src/components/atoms/buttonAtom";
import InputAtom from "@src/components/atoms/inputAtom";
import { useAgentGraphs } from "@src/hooks/useAgentGraphs";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("scrollbar-hide")
	.withStyle("overflow-auto")
	.withStyle("max-w-[350px]")
	.withStyle("max-h-[350px]")
	.withStyle("text-sm")
	.withStyle("font-mono")
	.withStyle("space-y-1")
	.withStyle("p-1")
	.withRoundedFrame()
	.withShadow()
	.withBg()
	.build();

const Input = new ComponentBuilder(InputAtom)
	.withStyle("focus:border-aqua-light")
	.withStyle("border-night-light")
	.withStyle("text-aqua")
	.withStyle("bg-night-black")
	.withStyle("text-md")
	.withStyle("font-bold")
	.withStyle("text-center")
	.withStyle("outline-none")
	.withStyle("ring-none")
	.withStyle("border")
	.withStyle("py-2")
	.withStyle("w-full")
	.withStyle("h-full")
	.withStyle("px-1")
	.withRoundedElement()
	.build();

const Button = new ComponentBuilder(ButtonAtom)
	.withStyle("border-night-light")
	.withStyle("text-night-title")
	.withStyle("bg-night")
	.withStyle("text-aqua")
	.withStyle("font-bold")
	.withStyle("border")
	.withStyle("w-full")
	.withRoundedElement()
	.build();

const Content = new ComponentBuilder(AtomicDiv)
	.withStyle("border-night-light")
	.withStyle("text-aqua-dark")
	.withStyle("bg-night-black")
	.withStyle("font-semibold")
	.withStyle("overflow-auto")
	.withStyle("scrollbar-hide")
	.withStyle("text-xs")
	.withStyle("border")
	.withStyle("p-1")
	.withRoundedButton()
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

		setContentText(response.error.details);
	};

	// useEffect(() => {
	// 	sendOutput(nodeData, nodeFlowValue, setNodeFlowValue);
	// 	const input = extractInput(nodeData, nodeFlowValue);
	// 	if (input) setinputLabelText(input);
	// }, [nodeFlowValue]);

	return (
		<>
			{nodeData.handles?.map((handle, index) =>
				DrawHandle({ handle, nodeData, index }),
			)}
			<Root className={NodeSelectionState(props.id)}>
				<Input
					value={inputBoxText}
					onChange={(e) => setinputLabelText(e.target.value)}
				></Input>
				<Button onClick={onClick}>Test</Button>
				<Content>{contentText}</Content>
			</Root>
		</>
	);
};

export default React.memo(TestBox);
