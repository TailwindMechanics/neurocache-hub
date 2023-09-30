//path: src\components\react_flow\nodes\splitterNode.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import NodeSelectionState from "../utils/nodeSelectionState";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import MapOutputIds from "../utils/mapOutputIds";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import { Splitter } from "@src/data/icons";
import React, { useEffect } from "react";
import { NodeProps } from "reactflow";

const Build = new ComponentBuilder(AtomicDiv)
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("px-1")
	.withRounded()
	.withShadow()
	.withBg()
	.build();

const SplitterNode: React.FC<NodeProps> = (props: NodeProps) => {
	const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
	const nodeData = props.data as NodeData;

	useEffect(() => {
		updateNodeFlowOutputs();
	}, [nodeFlowValue]);

	const updateNodeFlowOutputs = () => {
		const outputs = MapOutputIds(nodeFlowValue.ids, nodeData.handles);
		if (outputs && outputs.length > 0) {
			setNodeFlowValue({
				ids: outputs,
				payload: nodeFlowValue.payload,
			});
		}
	};

	return (
		<>
			{nodeData.handles?.map((handle, index) =>
				DrawHandle({ handle, nodeData, index }),
			)}
			<Build className={NodeSelectionState(props.id)}>
				<Splitter className="stroke-fill-none h-5 w-4 stroke-aqua-dark text-aqua" />
			</Build>
		</>
	);
};

export default React.memo(SplitterNode);
