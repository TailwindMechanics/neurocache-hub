//path: src\components\react_flow\nodes\markdownBox.tsx

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
			<CardPreset className={NodeSelectionState(props.id)}>
				<ProsePreset>{memoizedMarkdown}</ProsePreset>
			</CardPreset>
		</>
	);
};

export default React.memo(MarkdownBox);
