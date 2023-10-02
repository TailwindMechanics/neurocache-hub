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

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("space-y-0.5")
	.withStyle("font-mono")
	.withStyle("flex-col")
	.withStyle("text-xs")
	.withStyle("p-1.5")
	.withStyle("flex")
	.withRoundedFrame()
	.withShadow()
	.withBg()
	.build();

const Input = new ComponentBuilder(InputAtom)
	.withStyle("focus:border-aqua-light")
	.withStyle("border-night-light")
	.withStyle("text-aqua-light")
	.withStyle("bg-night-black")
	.withStyle("text-center")
	.withStyle("outline-none")
	.withStyle("ring-none")
	.withStyle("border")
	.withStyle("py-0.5")
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
	.withStyle("text-sm")
	.withStyle("border")
	.withStyle("p-10")
	.withRoundedButton()
	.build();

const TestBox: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputBoxText, setinputLabelText] = useState("Text");
	const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
	const nodeData = props.data as NodeData;

	const onClick = () => {
		console.log("clicked");
	};
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
			<Root className={NodeSelectionState(props.id)}>
				<Input
					value={inputBoxText}
					onChange={(e) => setinputLabelText(e.target.value)}
				></Input>
				<Button onClick={onClick}>Test</Button>
				<Content></Content>
			</Root>
		</>
	);
};

export default React.memo(TestBox);
