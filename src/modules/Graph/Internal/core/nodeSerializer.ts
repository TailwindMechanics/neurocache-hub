//path: src\modules\Graph\Internal\core\nodeSerializer.ts

import { Edge, Node, Viewport } from "reactflow";

export const loadUserGraph = (flowKey: string) => {
    const flowData = localStorage.getItem(flowKey);
    if (!flowData) return null;
    const flow = JSON.parse(flowData);
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
