//path: src\components\client\reactflow\nodes\splitterNode.tsx

import NodeSelectionState from "../utils/nodeSelectionState";
import ComponentBuilder from "../../ui/ComponentBuilder";
import CardShellPreset from "../../ui/cardShellPreset";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import MapOutputIds from "../utils/mapOutputIds";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import { Splitter } from "@src/data/icons";
import React, { useEffect } from "react";
import { NodeProps } from "reactflow";

const Card = new ComponentBuilder(CardShellPreset).withStyle("px-1").build();

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
			<Card className={NodeSelectionState(props.id)}>
				<Splitter className="stroke-fill-none h-5 w-4 stroke-aqua-dark text-aqua" />
			</Card>
		</>
	);
};

export default React.memo(SplitterNode);
