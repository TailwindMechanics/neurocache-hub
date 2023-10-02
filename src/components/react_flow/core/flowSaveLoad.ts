//path: src\components\react_flow\core\flowSaveLoad.ts

import customNodeTypes from "@src/data/customNodeTypes";
import { User } from "@supabase/supabase-js";
import { Edge, Node, NodeTypes, ReactFlowInstance, Viewport } from "reactflow";
import { spawnLoginNode } from "../utils/nodeSpawner";

export const loadGuestGraph = (
	nodes: Node[],
	setNodes: React.Dispatch<React.SetStateAction<Node[]>>,
	setTypes: React.Dispatch<React.SetStateAction<NodeTypes>>,
) => {
	spawnLoginNode(nodes, setNodes, setTypes);
};

export const loadUserGraph = (
	currentUser: User,
	flowKey: string,
	setNodes: React.Dispatch<React.SetStateAction<Node[]>>,
	setEdges: React.Dispatch<React.SetStateAction<Edge[]>>,
	setTypes: React.Dispatch<React.SetStateAction<NodeTypes>>,
) => {
	console.log(
		"%c>>> User Loaded: %c" + currentUser.email,
		"color: #c98289; font-weight: bold",
		"color: #8cd7ce; font-weight: bold",
	);
		
	//
	const flowData = localStorage.getItem(flowKey);
	if (!flowData) return { x: 0, y: 0, zoom: 1 } as Viewport;

	const flow = JSON.parse(flowData);
	if (!flow) return { x: 0, y: 0, zoom: 1 } as Viewport;

	setNodes(flow.nodes as Node[]);
	setEdges(flow.edges as Edge[]);
	setTypes({ ...customNodeTypes });

	return flow.viewport as Viewport;
};

export const loadFlow = (
	flowKey: string,
	setNodes: React.Dispatch<React.SetStateAction<Node[]>>,
	setEdges: React.Dispatch<React.SetStateAction<Edge[]>>,
): Viewport => {
	const flowData = localStorage.getItem(flowKey);
	if (!flowData) return { x: 0, y: 0, zoom: 1 } as Viewport;

	const flow = JSON.parse(flowData);
	if (!flow) return { x: 0, y: 0, zoom: 1 } as Viewport;

	setNodes(flow.nodes as Node[]);
	setEdges(flow.edges as Edge[]);

	return flow.viewport as Viewport;
};

export const saveFlow = (
	reactFlowInstance: ReactFlowInstance,
	setNodes: React.Dispatch<React.SetStateAction<Node[]>>,
	setEdges: React.Dispatch<React.SetStateAction<Edge[]>>,
	setIsSaved: React.Dispatch<React.SetStateAction<boolean>>,
	flowKey: string,
	viewport: Viewport,
) => {
	const nodes = reactFlowInstance.getNodes();
	if (nodes.length === 0) return;

	const edges = reactFlowInstance.getEdges();
	setNodes(nodes);
	setEdges(edges);

	const flowString = JSON.stringify({ nodes, edges, viewport });

	console.log("%c>>> Saving flow", "color: #d1be7d; font-weight: bold");

	localStorage.setItem(flowKey, flowString);

	setIsSaved(true);
	setTimeout(() => setIsSaved(false), 2000);
};
