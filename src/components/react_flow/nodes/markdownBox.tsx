//path: src\components\react_flow\nodes\markdownBox.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import NodeSelectionState from "../utils/nodeSelectionState";
import React, { useEffect, useMemo, useState } from "react";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import RenderCodeblocks from "../utils/renderCodeblocks";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import Markdown from "react-markdown";
import { NodeProps } from "reactflow";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("scrollbar-hide")
	.withStyle("overflow-auto")
	.withStyle("max-w-[320px]")
	.withStyle("max-h-[200px]")
	.withStyle("font-mono")
	.withStyle("p-1.5")
	.withRounded()
	.withShadow()
	.withBg()
	.build();

const Content = new ComponentBuilder(AtomicDiv)
	.withStyle("prose-code:text-aqua-body")
	.withStyle("prose-strong:text-aqua")
	.withStyle("prose-pre:scrollbar-hide")
	.withStyle("border-night-light")
	.withStyle("prose-h1:text-aqua")
	.withStyle("prose-h2:text-aqua")
	.withStyle("prose-h3:text-aqua")
	.withStyle("prose-h4:text-aqua")
	.withStyle("text-aqua-title")
	.withStyle("prose-pre:text-xs")
	.withStyle("prose-pre:rounded")
	.withStyle("bg-night-black")
	.withStyle("prose-code:m-0")
	.withStyle("prose-code:p-0")
	.withStyle("prose-pre:m-0")
	.withStyle("prose-pre:p-0")
	.withStyle("text-xs")
	.withStyle("pt-0.5")
	.withStyle("pb-1.5")
	.withStyle("px-1.5")
	.withStyle("border")
	.withStyle("prose")
	.withRounded()
	.build();

const MarkdownBox: React.FC<NodeProps> = (props: NodeProps) => {
	const [markdownText, setMarkdownText] = useState("## *Markdown box*");
	const { nodeFlowValue } = useNodeFlow();
	const nodeData = props.data as NodeData;

	useEffect(() => {
		const anyInputIncluded = nodeData.handles.some((input) => {
			return (
				input.type === "target" && nodeFlowValue.ids.includes(input.id)
			);
		});

		if (anyInputIncluded) {
			let displayText = !IsNullOrEmpty(nodeFlowValue.payload)
				? (nodeFlowValue.payload as string)
				: "Input box";

			setMarkdownText(displayText);
		}
	}, [nodeFlowValue]);

	const memoizedMarkdown = useMemo(() => {
		return (
			<Markdown
				components={{
					code: RenderCodeblocks as any,
				}}
			>
				{markdownText}
			</Markdown>
		);
	}, [markdownText]);

	return (
		<>
			{nodeData.handles?.map((handle, index) =>
				DrawHandle({ handle, nodeData, index }),
			)}
			<Root className={NodeSelectionState(props.id)}>
				<Content>{memoizedMarkdown}</Content>
			</Root>
		</>
	);
};

export default React.memo(MarkdownBox);
