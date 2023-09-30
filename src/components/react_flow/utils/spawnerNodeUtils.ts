//path: src\components\react_flow\utils\spawnerNodeUtils.ts

import { NodeData } from "@src/types/nodeData";
import { Node, XYPosition } from "reactflow";

export const spawnSpawnerNode = (
	mouseCoords: XYPosition,
	customNodeDefaults: NodeData[],
): Node => {
	let newPos = { ...mouseCoords };
	newPos.x -= 20;
	newPos.y -= 20;

	const nodeConfig = customNodeDefaults.find(
		(item) => item.nodeType === "spawner",
	) as NodeData;
	nodeConfig.nodePosition = newPos;

	const spawnerNode: Node = {
		id: nodeConfig.nodeId,
		type: nodeConfig.nodeType,
		position: nodeConfig.nodePosition,
		data: nodeConfig,
		selected: false,
	};

	return spawnerNode;
};

export const removeSpawnerNode = (prevNodes: Node[]): Node[] => {
	const filteredNodes = prevNodes.filter(
		(node) => node.id !== "node_spawner_1",
	);
	return filteredNodes;
};
