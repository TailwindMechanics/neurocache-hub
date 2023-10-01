//path: src\components\react_flow\nodes\openAiNode.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import NodeSelectionState from "../utils/nodeSelectionState";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import { useOpenAI } from "@src/hooks/useOpenAI";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import React, { useEffect } from "react";
import { NodeProps } from "reactflow";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("text-sm")
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
	.withStyle("border")
	.withStyle("px-1")
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
			<Root className={NodeSelectionState(props.id)}>
				<Content>{nodeData.nodeName}</Content>
			</Root>
		</>
	);
};

export default React.memo(OpenAiNode);
