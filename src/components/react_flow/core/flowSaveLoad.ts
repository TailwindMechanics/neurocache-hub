//path: src\components\react_flow\core\flowSaveLoad.ts
import { Edge, Node, Viewport } from "reactflow";

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

	console.log("%c>>> Loaded flow", "color: #a97dd1; font-weight: bold");
	return flow.viewport as Viewport;
};

export const saveFlow = (
	reactFlowInstance: any,
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
