//path: src\modules\Graph\Internal\core\nodeSerializer.tsx

"use client";

import { Edge, Node, Viewport } from "reactflow";

interface GraphData {
    nodes: Node[];
    edges: Edge[];
    viewport: Viewport;
}

export const loadUserGraph = (flowKey: string): GraphData => {
    const result: GraphData = {
        nodes: [],
        edges: [],
        viewport: { x: 0, y: 0, zoom: 2.5 },
    };
    if (typeof window === "undefined") return result;

    const flowData = localStorage.getItem(flowKey);
    if (!flowData) return result;

    const flow = JSON.parse(flowData) as GraphData;
    if (!flow) return result;

    return flow;
};

export const saveGraph = (
    nodes: Node[],
    edges: Edge[],
    flowKey: string,
    viewport: Viewport,
) => {
    const flowString = JSON.stringify({ nodes, edges, viewport });
    localStorage.setItem(flowKey, flowString);
};
