//path: src\components\react_flow\nodes\anchorNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { SelectionStyle } from "@src/utils/selectionStyle";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { NodeData } from "@src/types/nodeData";
import withBaseNode from "../core/baseNode";
import React, { useEffect } from "react";
import { NodeProps } from "reactflow";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("space-y-2")
	.withStyle("px-1")
	.withRounded()
	.withBg()
	.build();

const OpenAiNode: React.FC<NodeProps> = (props: NodeProps) => {
	const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
	const selectionStyle = new SelectionStyle();
	const config = props.data as NodeData;

	useEffect(() => {
		const anyInputIncluded = config.inputs.some((input) =>
			nodeFlowValue.ids.includes(input.id),
		);

		if (anyInputIncluded) {
			setNodeFlowValue({
				ids: config.outputs.map((output) => output.id),
				payload: nodeFlowValue.payload,
			});
		}
	}, [nodeFlowValue, config]);

	return (
		<>
			<Root className={selectionStyle.update(props.id)}>
				{config.nodeName}
			</Root>
		</>
	);
};

export default withBaseNode(OpenAiNode);
