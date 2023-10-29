//path: src\modules\Agents\types.tsx

import { GraphData } from "@modules/Graph/types";

export interface Agent {
    agent_id: string;
    user_id: string;
    name: string;
    persona: string;
    status: string;
    avatarUrl: string;
    graph: GraphData;
    dateModified: Date;
    dateCreated: Date;
}
