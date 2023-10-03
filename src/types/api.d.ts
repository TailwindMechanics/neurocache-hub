//path: src\types\api.d.ts

import { UUID } from "crypto";

export interface AgentGraph {
	user_id: string;
	graph_data: Json | null
}