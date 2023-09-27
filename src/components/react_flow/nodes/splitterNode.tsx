//path: src\components\react_flow\nodes\splitterNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import NodeSelectionState from "../utils/nodeSelectionState";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import CardAtom from "@src/components/atoms/cardAtom";
import { useReactFlow, NodeProps, XYPosition } from "reactflow";
import MapOutputIds from "../utils/mapOutputIds";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import { Splitter } from "@src/data/icons";
import React, { useEffect } from "react";

const Build = new ComponentBuilder(AtomicDiv)
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("px-1")
	.withRounded()
	.withBg()
	.build();

const SplitterNode: React.FC<NodeProps> = (props: NodeProps) => {
	const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
	const reactFlowInstance = useReactFlow();
	const config = props.data as NodeData;

	const thisNode = reactFlowInstance?.getNode(config.nodeId);
	const thisNodeSize: XYPosition = {
		x: thisNode?.width as number,
		y: thisNode?.height as number,
	};

	useEffect(() => {
		updateNodeFlowOutputs();
	}, [nodeFlowValue]);

	const updateNodeFlowOutputs = () => {
		const outputs = MapOutputIds(nodeFlowValue.ids, config.handles);
		if (outputs && outputs.length > 0) {
			setNodeFlowValue({
				ids: outputs,
				payload: nodeFlowValue.payload,
			});
		}
	};

	return (
		<>
			{config.handles?.map((handle, index) =>
				DrawHandle(handle, thisNodeSize, index),
			)}
			<CardAtom title={config.nodeName} body={config.body}>
				<Build
					className={NodeSelectionState(reactFlowInstance, props.id)}
				>
					<Splitter className="stroke-fill-none h-5 w-4 stroke-aqua-dark text-aqua" />
				</Build>
			</CardAtom>
		</>
	);
};

export default React.memo(SplitterNode);
