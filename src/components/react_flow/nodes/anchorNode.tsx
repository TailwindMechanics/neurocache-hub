//path: src\components\react_flow\nodes\anchorNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import CreateHandles, { CreateHandle } from "../utils/createHandles";
import NodeSelectionState from "../utils/nodeSelectionState";
import { NodeData, PositionId } from "@src/types/nodeData";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import CardAtom from "@src/components/atoms/cardAtom";
import React, { useEffect, useState } from "react";
import DrawHandles from "../utils/drawHandles";
import {
	useUpdateNodeInternals,
	useReactFlow,
	NodeProps,
	useEdges,
} from "reactflow";

const Build = new ComponentBuilder(AtomicDiv)
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("space-y-2")
	.withStyle("px-1")
	.withRounded()
	.withBg()
	.build();

const AnchorNode: React.FC<NodeProps> = (props: NodeProps) => {
	const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
	const updateNodeInternals = useUpdateNodeInternals();
	const config = props.data as NodeData;
	const edges = useEdges();
	const reactFlowInstance = useReactFlow();

	const [drawHandles, setDrawHandles] = useState(
		CreateHandles("target", config),
	);

	useEffect(() => {
		const anyInputIncluded = drawHandles.some((handle) => {
			return (
				handle.type === "target" &&
				nodeFlowValue.ids.includes(handle.id)
			);
		});

		if (anyInputIncluded) {
			const sourceIds = drawHandles
				.filter((handle) => handle.type === "source")
				.map((handle) => handle.id);
			setNodeFlowValue({
				ids: sourceIds,
				payload: nodeFlowValue.payload,
			});
		}
	}, [nodeFlowValue]);

	useEffect(() => {
		const edgeHandles = edges
			.flatMap((edge) => [edge.sourceHandle, edge.targetHandle])
			.filter(Boolean);

		let handlesToKeep: PositionId[] = [];
		let nodesToUpdate: string[] = [config.nodeId];

		drawHandles.forEach((handle) => {
			const foundHandle = edgeHandles.includes(handle.id) ? handle : null;
			if (!foundHandle) return;

			handlesToKeep.push(
				CreateHandle(config, foundHandle.type, foundHandle.position),
			);
		});

		console.log("handlesToKeep", handlesToKeep);

		const type = handlesToKeep.length > 0 ? "source" : "target";
		const skipOthers = handlesToKeep.length > 1;
		setDrawHandles(CreateHandles(type, config, handlesToKeep, skipOthers));

		const allNodesInEdges = edges
			.flatMap((edge) => [edge.target, edge.source])
			.filter(Boolean);
		const uniqueNodesToUpdate = new Set(
			nodesToUpdate.concat(allNodesInEdges),
		);
		nodesToUpdate = Array.from(uniqueNodesToUpdate);

		console.log("nodesToUpdate", nodesToUpdate);

		updateNodeInternals(nodesToUpdate);
	}, [edges]);

	const Component: React.FC<NodeProps> = (props) => (
		<CardAtom title={config.nodeName} body={config.body}>
			<Build className={NodeSelectionState(reactFlowInstance, props.id)}>
				{config.nodeName}
			</Build>
		</CardAtom>
	);

	return (
		<>
			{drawHandles.map((handle, index) => DrawHandles(handle, index))}
			<Component {...props}></Component>
		</>
	);
};

export default AnchorNode;
