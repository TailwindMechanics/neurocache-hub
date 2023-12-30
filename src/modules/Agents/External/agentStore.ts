//path: src\modules\Agents\External\agentStore.ts

import { create } from "zustand";

import { getAgent, getRecentAgents } from "./Server/actions";
import { Agent } from "../types";

interface AgentState {
    activeAgent: Agent | null;
    conciergeAgent: Agent | null;
    recentAgents: Agent[];
    setActiveAgent: (agent: Agent | null) => void;
    setConciergeAgent: (agent: Agent | null) => void;
    fetchConciergeAgent: () => Promise<void>;
    setRecentAgents: (agents: Agent[]) => void;
    refreshRecentAgents: () => Promise<void>;
}

export const useAgentStore = create<AgentState>((set, get) => ({
    activeAgent: null,
    conciergeAgent: null,
    recentAgents: [],

    setActiveAgent: (agent: Agent | null) => {
        set((state) => {
            if (state.activeAgent?.agent_id !== agent?.agent_id) {
                return { activeAgent: agent };
            }
            return state;
        });
    },

    setConciergeAgent: (agent: Agent | null) => {
        set((state) => {
            if (state.conciergeAgent?.agent_id !== agent?.agent_id) {
                return { conciergeAgent: agent };
            }
            return state;
        });
    },

    fetchConciergeAgent: async () => {
        const currentConciergeAgent = get().conciergeAgent;

        if (!currentConciergeAgent) {
            const fetchedAgent = await getAgent(
                process.env.NEXT_PUBLIC_CONCIERGE_AGENT_ID,
            );
            if (fetchedAgent) {
                set({ conciergeAgent: fetchedAgent });
            }
        }
    },

    setRecentAgents: (agents: Agent[]) =>
        set((state) => {
            return state;
        }),

    refreshRecentAgents: async () => {
        const agents = await getRecentAgents();
        set({ recentAgents: agents });
    },
}));
