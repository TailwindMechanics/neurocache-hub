//path: src\modules\Graph\Internal\core\nodeSerializer.tsx

"use client";

import { Graph } from "@modules/Graph/types";
import { Edge, Node, Viewport } from "reactflow";

export const loadGraph = (graph: Graph): Graph => {
    const result: Graph = {
        nodes: graph?.nodes ?? [],
        edges: graph?.edges ?? [],
        viewport: graph?.viewport ?? { x: 0, y: 0, zoom: 2.5 },
    };
    return result;
};

export const loadUserGraph = (flowKey: string): Graph => {
    const result: Graph = {
        nodes: [],
        edges: [],
        viewport: { x: 0, y: 0, zoom: 2.5 },
    };
    if (typeof window === "undefined") return result;

    const flowData = localStorage.getItem(flowKey);
    if (!flowData) return result;

    const flow = JSON.parse(flowData) as Graph;
    if (!flow) return result;

    return flow;
};

export const saveGraph = (
    nodes: Node[],
    edges: Edge[],
    flowKey: string,
    viewport: Viewport,
) => {
    const flowJson = graphToJson(nodes, edges, viewport);
    localStorage.setItem(flowKey, flowJson);
};

export const graphToJson = (
    nodes: Node[],
    edges: Edge[],
    viewport: Viewport,
) => {
    return JSON.stringify({ nodes, edges, viewport });
};
