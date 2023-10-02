//path: src\components\react_flow\utils\nodeSpawner.tsx

import { customNodeDefaults } from "@src/data/customNodeTypes";
import { Node, NodeTypes, ReactFlowInstance } from "reactflow";
import { createNode, deselectAllNodes } from "./nodeUtils";
import loginNode from "../nodes/loginNode";

export const spawnLoginNode = (
	reactFlowInstance: ReactFlowInstance,
	setTypes: React.Dispatch<React.SetStateAction<NodeTypes>>,
) => {
	setTypes({ login: loginNode });
	spawnNode("login", reactFlowInstance, true);
};

export const spawnNode = (
	nodeType: string,
	reactFlowInstance: ReactFlowInstance,
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

	const prevNodes = deselectAllNodes(reactFlowInstance.getNodes());
	let newNodes = prevNodes.filter((n) => n.id !== newNode.id) as Node[];

	newNode.selected = true;
	if (clearGraph) newNodes = [];
	newNodes.push(newNode);
	reactFlowInstance.setNodes(newNodes);

	return newNode;
};
