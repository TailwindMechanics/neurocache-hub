//path: src\modules\Agents\types.tsx

import { Graph } from "@modules/Graph/types";

export interface NodeOutput {
    node_id: string;
    payload: string;
    output_handle_ids: string[];
}

export interface GraphOutput {
    nodes: NodeOutput[];
}

export interface Agent {
    agent_id: string;
    creator_id: string;
    agent_name: string;
    persona: string;
    status: string;
    avatarUrl: string;
    graph: Graph;
    output: GraphOutput;
    dateModified: Date;
    dateCreated: Date;
}
