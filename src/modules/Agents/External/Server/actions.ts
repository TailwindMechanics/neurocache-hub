//path: src\modules\Agents\External\Server\actions.ts

"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const createAgentFunction = "create_agent";
const deleteAgentFunction = "delete_agent";

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
        agentname: agentName,
    });

    return response;
}

export async function deleteAgent(agentId: string) {
    const supabase = await getAuthenticatedClient();
    if (!supabase) return null;

    const response = await supabase.rpc(deleteAgentFunction, {
        agentid: agentId,
    });

    return response;
}
