//path: src\modules\Agents\External\Server\actions.ts

"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Agent } from "../../types";

const createAgentFunction = "CreateAgent";
const getRecentAgentsFunction = "GetRecentAgents";
const updateAgentGraphFunction = "UpdateAgentGraph";
const deleteAgentFunction = "DeleteAgent";

async function getAuthenticatedClient() {
    const supabase = createServerActionClient({ cookies });

    const userResponse = await supabase.auth.getUser();
    if (!userResponse.data.user) return null;

    return supabase;
}

export async function createAgent(agentName: string) {
    const supabase = await getAuthenticatedClient();
    if (!supabase) return null;

    const response = await supabase.rpc(createAgentFunction, {
        agentName: agentName,
    });

    return response;
}

export async function getMostRecentAgent(): Promise<Agent | null> {
    const response = await getRecentAgents(1);
    return response[0] as Agent;
}

export async function getRecentAgents(count: number = 10): Promise<Agent[]> {
    const supabase = await getAuthenticatedClient();
    if (!supabase) return Promise.resolve([]);
    const userResponse = await supabase.auth.getUser();
    if (!userResponse.data.user) return Promise.resolve([]);

    const response = await supabase.rpc(getRecentAgentsFunction, {
        userId: userResponse.data.user.id,
        count: count,
    });

    return response.data as Agent[];
}

export async function updateAgentGraph(agentId: string, agentGraph: object) {
    const supabase = await getAuthenticatedClient();
    if (!supabase) return null;

    const response = await supabase.rpc(updateAgentGraphFunction, {
        agentId: agentId,
        agentGraph: agentGraph,
    });

    return response;
}

export async function deleteAgent(agentId: string) {
    const supabase = await getAuthenticatedClient();
    if (!supabase) return null;

    const response = await supabase.rpc(deleteAgentFunction, {
        agentId: agentId,
    });

    return response;
}
