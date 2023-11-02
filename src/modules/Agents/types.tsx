//path: src\modules\Agents\types.tsx

import { Graph } from "@modules/Graph/types";

export interface Agent {
    agent_id: string; // created in db
    creator_id: string; // created in db
    agent_name: string; // created in create method
    status: string; // edited in client
    persona: string; // will be autogenerated by microservice
    avatar_url: string; // will be autogenerated by microservice
    graph: Graph; // edited in client
    date_modified: Date; // update automatically in db
    date_created: Date; // created in db
}
