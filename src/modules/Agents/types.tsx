//path: src\modules\Agents\types.tsx

import { GraphData } from "@modules/Graph/types";

export interface Agent {
    creator_user_id: string;
    name: string;
    imgUrl: string;
    role: string;
    status: boolean;
    dateCreated: string;
    dateModified: string;
    graph_data: GraphData;
}
