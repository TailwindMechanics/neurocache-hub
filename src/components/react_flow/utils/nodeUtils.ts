//path: src\components\react_flow\utils\nodeUtils.ts

import { NodeData, PositionId } from "@src/types/nodeData";
import { Uid } from "../../../utils/stringUtils";

interface CreateNodeProps {
	type: string;
	name: string;
	body: string;
	handles?: PositionId[];
	pos: { x: number; y: number };
}

export const UpdateNodes = (
	config: NodeData,
	edges: any[],
	updateNodeInternals: any,
) => {
	let nodesToUpdate: string[] = [config.nodeId];
	const allNodesInEdges = edges
		.flatMap((edge) => [edge.target, edge.source])
		.filter(Boolean);
	const uniqueNodesToUpdate = new Set(nodesToUpdate.concat(allNodesInEdges));

	nodesToUpdate = Array.from(uniqueNodesToUpdate);
	updateNodeInternals(nodesToUpdate);
};

export const createNode = (props: CreateNodeProps) => {
	const uid = Uid();
	return {
		nodeType: props.type,
		nodeName: props.name,
		nodeId: `node_${props.type}_${uid}`,
		body: props.body,
		handles: props.handles || [],
		nodePosition: props.pos,
	} as NodeData;
};
