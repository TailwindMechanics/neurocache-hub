import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { NodeProps, XYPosition, useReactFlow } from "reactflow";
import NodeSelectionState from "../utils/nodeSelectionState";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import React, { useEffect, useState } from "react";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("scrollbar-hide")
	.withStyle("overflow-auto")
	.withStyle("max-w-[340px]")
	.withStyle("max-h-[200px]")
	.withStyle("font-mono")
	.withStyle("text-sm")
	.withStyle("p-1.5")
	.withRounded()
	.withShadow()
	.withBg()
	.build();

const Content = new ComponentBuilder(AtomicDiv)
	.withStyle("prose-strong:text-aqua")
	.withStyle("prose-pre:scrollbar-hide")
	.withStyle("border-night-light")
	.withStyle("prose-h1:text-aqua")
	.withStyle("prose-h2:text-aqua")
	.withStyle("prose-h3:text-aqua")
	.withStyle("prose-h4:text-aqua")
	.withStyle("text-aqua-title")
	.withStyle("bg-night-black")
	.withStyle("prose-sm")
	.withStyle("text-xs")
	.withStyle("border")
	.withStyle("prose")
	.withStyle("p-2")
	.withRounded()
	.build();

const MarkdownBox: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputBoxText, setinputLabelText] = useState("## *Markdown box*");
	const reactFlowInstance = useReactFlow();
	const { nodeFlowValue } = useNodeFlow();
	const config = props.data as NodeData;

	const thisNode = reactFlowInstance?.getNode(config.nodeId);
	const thisNodeSize: XYPosition = {
		x: thisNode?.width as number,
		y: thisNode?.height as number,
	};

	useEffect(() => {
		const anyInputIncluded = config.handles.some((input) => {
			return (
				input.type === "target" && nodeFlowValue.ids.includes(input.id)
			);
		});

		if (anyInputIncluded) {
			let displayText = !IsNullOrEmpty(nodeFlowValue.payload)
				? (nodeFlowValue.payload as string)
				: "Input box";

			setinputLabelText(displayText);
		}
	}, [nodeFlowValue]);

	return (
		<>
			{config.handles?.map((handle, index) =>
				DrawHandle(handle, thisNodeSize, index),
			)}
			<Root className={NodeSelectionState(reactFlowInstance, props.id)}>
				<Content>{inputBoxText}</Content>
			</Root>
		</>
	);
};

export default MarkdownBox;
