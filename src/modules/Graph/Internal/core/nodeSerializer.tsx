//path: src\modules\Graph\Internal\core\nodeSerializer.tsx

"use client";

import { CustomNode, Graph } from "../../types";

export const loadGraph = (graph: Graph): Graph => {
    const nodes = graph.nodes.filter((node) => {
        const nodeData = node.data as CustomNode;
        return nodeData.category !== "Persistent";
    });
    const result: Graph = {
        nodes: nodes,
        edges: graph.edges,
        viewport: graph.viewport,
    };
    return result;
};
