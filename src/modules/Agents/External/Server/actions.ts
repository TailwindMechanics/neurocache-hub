//path: src\modules\Agents\External\Server\actions.ts

"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Agent } from "../../types";
import { AgentChatHistory, ChatMessage } from "@modules/Drawer/types";

const getChatHistory = "get_chat_history";
const createAgentFunction = "CreateAgent";
const getRecentAgentsFunction = "GetRecentAgents";
const updateAgentGraphFunction = "UpdateAgentGraph";
const deleteAgentFunction = "DeleteAgent";
const getAgentFunction = "get_agent_by_id";

export async function getConciergeAgent() {
    const supabase = await getAuthenticatedClient();
    if (!supabase) return null;

    const userResponse = await supabase.auth.getUser();
    const user = userResponse.data.user;
    if (!user) return null;

    const response = await supabase
        .from("user_data")
        .select("*")
        .eq("user_id", user.id)
        .single();

    const userData = response.data;
    const conciergeAgentId = userData["concierge_agent_id"];
    const conciergeChannelId = userData["concierge_channel_id"];
    const response2 = await supabase.rpc(getChatHistory, {
        _channel_id: conciergeChannelId,
        _num_entries: 60,
    });

    const response3 = await supabase
        .from("agents")
        .select("*")
        .eq("agent_id", conciergeAgentId)
        .single();

    const conciergeAgent = response3.data as Agent;
    const chatHistory = response2.data as ChatMessage[];

    return {
        agent: conciergeAgent,
        chatHistory: chatHistory,
    } as AgentChatHistory;
}

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

export async function getAgent(
    agentId: string | undefined,
): Promise<Agent | null> {
    console.log("getAgent", agentId);

    if (!agentId) return Promise.resolve(null);

    const supabase = await getAuthenticatedClient();
    if (!supabase) return Promise.resolve(null);

    const userResponse = await supabase.auth.getUser();
    if (!userResponse.data.user) return Promise.resolve(null);

    const response = await supabase.rpc(getAgentFunction, {
        agent_id: agentId,
    });

    return response.data as Agent;
}
