//path: src\components\client\reactflow\nodes\openAiNode.tsx

import NodeSelectionState from "../utils/nodeSelectionState";
import ComponentBuilder from "../../ui/ComponentBuilder";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import ContentPreset from "../../ui/contentPreset";
import { useOpenAI } from "@src/hooks/useOpenAI";
import { NodeData } from "@src/types/nodeData";
import CardPreset from "../../ui/cardPreset";
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
