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

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("scrollbar-hide")
	.withStyle("overflow-auto")
	.withStyle("max-w-[200px]")
	.withStyle("max-h-[200px]")
	.withStyle("font-mono")
	.withStyle("p-1")
	.withRoundedFrame()
	.withShadow()
	.withBg()
	.build();

const Content = new ComponentBuilder(AtomicDiv)
	.withStyle("border-night-light")
	.withStyle("text-aqua-dark")
	.withStyle("bg-night-black")
	.withStyle("font-semibold")
	.withStyle("rounded-b-lg")
	.withStyle("rounded-t")
	.withStyle("text-sm")
	.withStyle("border")
	.withStyle("px-1")
	.build();

const TestBox: React.FC<NodeProps> = (props: NodeProps) => {
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
			<Root className={NodeSelectionState(props.id)}>
				<Content></Content>
			</Root>
		</>
	);
};

export default React.memo(TestBox);
