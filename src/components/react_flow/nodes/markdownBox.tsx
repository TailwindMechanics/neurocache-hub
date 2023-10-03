//path: src\components\react_flow\nodes\markdownBox.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import ProsePreset from "@src/components/components/prosePreset";
import CardPreset from "@src/components/components/cardPreset";
import NodeSelectionState from "../utils/nodeSelectionState";
import React, { useEffect, useMemo, useState } from "react";
import RenderCodeblocks from "../utils/renderCodeblocks";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import Markdown from "react-markdown";
import { NodeProps } from "reactflow";

const Card = new ComponentBuilder(CardPreset)
	.withStyle("scrollbar-hide")
	.withStyle("overflow-auto")
	.withStyle("max-h-44")
	.withStyle("max-w-60")
	.build();

const Prose = new ComponentBuilder(ProsePreset).withStyle("px-1").build();

const MarkdownBox: React.FC<NodeProps> = (props: NodeProps) => {
	const [markdownText, setMarkdownText] = useState("## *Markdown*");
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
			<Card className={NodeSelectionState(props.id)}>
				<Prose>{memoizedMarkdown}</Prose>
			</Card>
		</>
	);
};

export default React.memo(MarkdownBox);
