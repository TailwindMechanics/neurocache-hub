//path: src\modules\NeuroGraph\core\flowSaveLoad.ts

import { Edge, Node, NodeTypes, ReactFlowInstance, Viewport } from "reactflow";

import { spawnLoginNode } from "../../External";
import Data from "@shared/data";

export const loadGuestGraph = (
    nodes: Node[],
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>,
    setTypes: React.Dispatch<React.SetStateAction<NodeTypes>>,
) => {
    spawnLoginNode(nodes, setNodes, setTypes);
};

export const loadUserGraph = (
    flowKey: string,
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>,
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>,
    setTypes: React.Dispatch<React.SetStateAction<NodeTypes>>,
) => {
    const flowData = localStorage.getItem(flowKey);
    if (!flowData) return { x: 0, y: 0, zoom: 1 } as Viewport;

    const flow = JSON.parse(flowData);
    if (!flow) return { x: 0, y: 0, zoom: 1 } as Viewport;

    setNodes(flow.nodes as Node[]);
    setEdges(flow.edges as Edge[]);
    setTypes({ ...Data.NodeTypes });

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
    flowKey: string,
    viewport: Viewport,
) => {
    const nodes = reactFlowInstance.getNodes();
    if (nodes.length === 0) return;

    const edges = reactFlowInstance.getEdges();
    setNodes(nodes);
    setEdges(edges);

    const flowString = JSON.stringify({ nodes, edges, viewport });
    localStorage.setItem(flowKey, flowString);
};
