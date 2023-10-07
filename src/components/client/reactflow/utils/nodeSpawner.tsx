//path: src\components\client\reactflow\utils\nodeSpawner.tsx

import { customNodeDefaults } from "@src/data/customNodeTypes";
import { createNode, deselectAllNodes } from "./nodeUtils";
import { Node, NodeTypes } from "reactflow";
import loginNode from "../nodes/loginNode";

export const spawnLoginNode = (
	nodes: Node[],
	setNodes: React.Dispatch<React.SetStateAction<Node[]>>,
	setTypes: React.Dispatch<React.SetStateAction<NodeTypes>>,
) => {
	setTypes({ login: loginNode });
	spawnNode("login", nodes, setNodes, true);
};

export const spawnNode = (
	nodeType: string,
	nodes: Node[],
	setNodes: React.Dispatch<React.SetStateAction<Node[]>>,
	clearGraph?: boolean,
) => {
	const nodeDataDefaults = customNodeDefaults.find(
		(n) => n.nodeType === nodeType,
	);
	if (!nodeDataDefaults) return;

	const newNodeData = createNode({
		type: nodeType,
		name: nodeDataDefaults.nodeName,
		body: nodeDataDefaults.body,
		handles: nodeDataDefaults.handles,
		pos: { x: 0, y: 0 },
	});
	const newNode: Node = {
		id: newNodeData.nodeId,
		type: nodeType,
		position: newNodeData.nodePosition,
		data: { ...newNodeData },
	};

	const prevNodes = deselectAllNodes(nodes);
	let newNodes = prevNodes.filter((n) => n.id !== newNode.id) as Node[];

	newNode.selected = true;
	if (clearGraph) newNodes = [];

	newNodes.push(newNode);
	setNodes(newNodes);
};
