//path: src\components\react_flow\utils\nodeSpawner.tsx

import { customNodeDefaults } from "@src/data/customNodeTypes";
import { createNode, deselectAllNodes } from "./nodeUtils";
import { Node, ReactFlowInstance } from "reactflow";

export const spawnNode = (
	nodeType: string,
	reactFlowInstance: ReactFlowInstance,
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
	newNodes.push(newNode);
	reactFlowInstance.setNodes(newNodes);

	return newNode;
};
