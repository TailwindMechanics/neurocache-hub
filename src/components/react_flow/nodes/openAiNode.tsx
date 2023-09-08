//path: src\components\react_flow\nodes\openAiNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import TextBoxAtom from "@src/components/atoms/textBoxAtom";
import { ReactFlowHelper } from "@src/utils/reactFlowHelper";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { useOpenAI } from "@src/hooks/openAiContext";
import { NodeData } from "@src/types/nodeData";
import withBaseNode from "../core/baseNode";
import React, { useEffect } from "react";
import { NodeProps } from "reactflow";

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
	const flowHelper = new ReactFlowHelper();
	const config = props.data as NodeData;
	const openAI = useOpenAI();

	useEffect(() => {
		const fetchData = async () => {
			const anyInputIncluded = config.inputs.some((input) =>
				nodeFlowValue.ids.includes(input.id),
			);

			if (anyInputIncluded) {
				const messages = [
					{ role: "system", content: "You are a helpful assistant." },
					{ role: "user", content: nodeFlowValue.payload },
				];

				const reply = await openAI.chat(messages);
				setNodeFlowValue({
					ids: config.outputs.map((output) => output.id),
					payload: reply,
				});
			}
		};

		fetchData();
	}, [nodeFlowValue]);

	return (
		<>
			<Root className={flowHelper.updateSelectedState(props.id)}>
				<TextBoxAtom
					width={0}
					height={32}
					className={
						"rounded-b-lg rounded-t-sm bg-night-dark px-2 text-aqua-light ring-1 ring-night-light"
					}
					value={config.nodeName}
				/>
			</Root>
		</>
	);
};

export default withBaseNode(OpenAiNode);
