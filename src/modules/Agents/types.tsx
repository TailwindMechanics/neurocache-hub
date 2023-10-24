//path: src\modules\Agents\types.tsx

import { GraphData } from "@modules/Graph/types";

export interface Agent {
    creator_user_id: string;
    graph_data: GraphData;
    dateModified: Date;
    dateCreated: Date;
    status: boolean;
    imgUrl: string;
    role: string;
    name: string;
}
