//path: src\modules\Graph\types.tsx

import { XYPosition } from "reactflow";

export interface AgentGraph {
    user_id: string;
    graph_data: JSON | null;
}

export type NodeFlowValue = {
    ids: string[];
    payload: string | null;
};

export interface NodeData {
    nodeType: string;
    nodeName: string;
    category: string;
    nodeId: string;
    body: string;
    handles: PositionId[];
    nodePosition: { x: number; y: number };
}

export type PositionId = {
    id: string;
    type: "target" | "source";
    offset: XYPosition;
    viewMargin?: { top: string; left: string; bottom: string; right: string };
    angle: number;
};
