//path: src\components\react_flow\nodes\anchorNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { NodeConfigItem } from "@src/types/nodeData";
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
	const config = props.data as NodeConfigItem;

	useEffect(() => {
		if (nodeFlowValue.ids.includes(config.inputId)) {
			setNodeFlowValue({
				ids: [config.outputId],
				payload: nodeFlowValue.payload,
			});
		}
	}, [nodeFlowValue]);

	return (
		<>
			<Root>{config.label}</Root>
		</>
	);
};

export default withBaseNode(OpenAiNode);
