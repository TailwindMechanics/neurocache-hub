//path: src\components\react_flow\nodes\openAiNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { NodeProps, XYPosition, useReactFlow } from "reactflow";
import NodeSelectionState from "../utils/nodeSelectionState";
import TextBoxAtom from "@src/components/atoms/textBoxAtom";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import CardAtom from "@src/components/atoms/cardAtom";
import { useOpenAI } from "@src/hooks/openAiContext";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import React, { useEffect } from "react";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("space-y-2")
	.withStyle("p-2")
	.withRounded()
	.withBg()
	.build();

const OpenAiNode: React.FC<NodeProps> = (props: NodeProps) => {
	const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
	const reactFlowInstance = useReactFlow();
	const config = props.data as NodeData;
	const openAI = useOpenAI();

	const thisNode = reactFlowInstance?.getNode(config.nodeId);
	const thisNodeSize: XYPosition = {
		x: thisNode?.width as number,
		y: thisNode?.height as number,
	};

	useEffect(() => {
		const fetchData = async () => {
			const anyInputIncluded = config.handles.some((input) => {
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
				const sourceIds = config.handles
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
			{config.handles?.map((handle, index) =>
				DrawHandle(handle, thisNodeSize, index),
			)}
			<CardAtom title={config.nodeName} body={config.body}>
				<Root
					className={NodeSelectionState(reactFlowInstance, props.id)}
				>
					<TextBoxAtom
						width={0}
						height={32}
						className={
							"rounded-b-lg rounded-t-sm bg-night-dark px-2 text-aqua-light ring-1 ring-night-light"
						}
						value={config.nodeName}
					/>
				</Root>
			</CardAtom>
		</>
	);
};

export default OpenAiNode;
