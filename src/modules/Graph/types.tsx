//path: src\modules\Graph\types.tsx

import { Edge, Node, NodeProps, Viewport, XYPosition } from "reactflow";
import { ComponentType } from "react";

export interface GraphData {
    nodes: Node[];
    edges: Edge[];
    viewport: Viewport;
}

export interface AgentGraph {
    user_id: string;
    graph_data: GraphData;
}

export type NodeFlowValue = {
    ids: string[];
    payload: string | null;
};

export interface CustomNode {
    nodeType: string;
    nodeName: string;
    category: string;
    nodeId: string;
    body: string;
    handles: PositionId[];
    nodePosition: { x: number; y: number };
    nodeComponent: ComponentType<NodeProps>;
}

export type PositionId = {
    id: string;
    type: "target" | "source";
    offset: XYPosition;
    viewMargin?: { top: string; left: string; bottom: string; right: string };
    angle: number;
};
