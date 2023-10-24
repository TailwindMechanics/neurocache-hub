//path: src\modules\Database\External\Server\actions.ts

"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { GraphData } from "@modules/Graph/types";
import { Agent } from "@modules/Agents/types";

export async function createAgentGraph(agent: Agent) {
    const supabase = createServerActionClient({ cookies });
    const userResponse = await supabase.auth.getUser();
    if (!userResponse.data.user) return null;

    agent.creator_user_id = userResponse.data.user.id;
    agent.graph_data = {
        nodes: [],
        edges: [],
        viewport: { x: 0, y: 0, zoom: 1 },
    };

    const response = await supabase.from("agent_graphs").insert(agent).single();
    return response;
}

export async function upsertAgentGraph(agent: Agent) {
    const supabase = createServerActionClient({ cookies });
    const userResponse = await supabase.auth.getUser();
    if (!userResponse.data.user) return null;

    const response = await supabase.from("agent_graphs").upsert(agent).select();
    return response;
}

export async function getAgentGraph(userId: string) {
    const supabase = createServerActionClient({ cookies });
    const response = await supabase
        .from("agent_graphs")
        .select("*")
        .eq("user_id", userId);
    return response;
}

export async function deleteAgentGraph(userId: string) {
    const supabase = createServerActionClient({ cookies });
    const response = await supabase
        .from("agent_graphs")
        .delete()
        .eq("user_id", userId);
    return response;
}

export async function updateAgentGraph(userId: string, graphData: GraphData) {
    const supabase = createServerActionClient({ cookies });
    const response = await supabase
        .from("agent_graphs")
        .update({ graph_data: graphData })
        .eq("user_id", userId);
    return response;
}
