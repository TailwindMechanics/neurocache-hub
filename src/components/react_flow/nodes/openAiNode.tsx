//path: src\components\react_flow\nodes\openAiNode.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import ContentPreset from "@src/components/components/contentPreset";
import CardPreset from "@src/components/components/cardPreset";
import NodeSelectionState from "../utils/nodeSelectionState";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import { useOpenAI } from "@src/hooks/useOpenAI";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import React, { useEffect } from "react";
import { NodeProps } from "reactflow";

const Content = new ComponentBuilder(ContentPreset)
	.withStyle("text-sm")
	.withStyle("px-1")
	.withRoundedButton()
	.build();

const OpenAiNode: React.FC<NodeProps> = (props: NodeProps) => {
	const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
	const nodeData = props.data as NodeData;
	const openAI = useOpenAI();

	useEffect(() => {
		const fetchData = async () => {
			const anyInputIncluded = nodeData.handles.some((input) => {
				return (
					input.type === "target" &&
					nodeFlowValue.ids.includes(input.id)
				);
			});

			if (anyInputIncluded) {
				const messages = [
					{ role: "system", content: "You are a helpful assistant." },
					{ role: "user", content: nodeFlowValue.payload },
				];

				const reply = await openAI.chat(messages);
				const sourceIds = nodeData.handles
					.filter((handle) => handle.type === "source")
					.map((handle) => handle.id);
				setNodeFlowValue({
					ids: sourceIds,
					payload: reply,
				});
			}
		};

		fetchData();
	}, [nodeFlowValue]);

	return (
		<>
			{nodeData.handles?.map((handle, index) =>
				DrawHandle({ handle, nodeData, index }),
			)}
			<CardPreset className={NodeSelectionState(props.id)}>
				<Content>{nodeData.nodeName}</Content>
			</CardPreset>
		</>
	);
};

export default React.memo(OpenAiNode);
