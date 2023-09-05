//path: src\components\react_flow\nodes\openAiNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { NodeConfigItem } from "@src/types/declarations";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { useOpenAI } from "@src/hooks/openAiContext";
import withBaseNode from "../core/baseNode";
import React, { useEffect } from "react";
import { NodeProps } from "reactflow";
import TextBoxAtom from "@src/components/atoms/textBoxAtom";

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
	const config = props.data as NodeConfigItem;
	const openAI = useOpenAI();

	useEffect(() => {
		const fetchData = async () => {
			if (nodeFlowValue.ids.includes(config.inputId)) {
				const messages = [
					{ role: "system", content: "You are a helpful assistant." },
					{ role: "user", content: nodeFlowValue.payload },
				];

				const reply = await openAI.chat(messages);
				setNodeFlowValue({
					ids: [config.outputId],
					payload: reply,
				});
			}
		};

		fetchData();
	}, [nodeFlowValue]);

	return (
		<>
			<Root>
				<TextBoxAtom
					width={0}
					height={32}
					className={
						"rounded-b-lg rounded-t-sm bg-night-dark px-2 text-aqua-light ring-1 ring-night-light"
					}
					value={"Gpt-4"}
				/>
			</Root>
		</>
	);
};

export default withBaseNode(OpenAiNode);
