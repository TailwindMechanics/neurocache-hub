//path: src\modules\Agents\types.tsx

import { Graph } from "@modules/Graph/types";

export interface Agent {
    agent_id: string;
    creator_id: string;
    name: string;
    persona: string;
    status: string;
    avatarUrl: string;
    graph: Graph;
    dateModified: Date;
    dateCreated: Date;
}
