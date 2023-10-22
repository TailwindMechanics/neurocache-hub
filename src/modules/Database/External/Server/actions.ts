//path: src\modules\Database\External\Server\actions.ts

"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { AgentGraph, GraphData } from "@modules/Graph/types";
import { cookies } from "next/headers";

export async function upsertAgentGraph(graphData: GraphData) {
    const supabase = createServerActionClient({ cookies });
    const userResponse = await supabase.auth.getUser();
    if (!userResponse.data.user) return null;

    const agentGraph: AgentGraph = {
        user_id: userResponse.data.user.id,
        graph_data: graphData,
    };
    const response = await supabase
        .from("agent_graphs")
        .upsert(agentGraph)
        .select();
    return response;
}
