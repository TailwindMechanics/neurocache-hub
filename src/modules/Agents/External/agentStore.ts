//path: src\modules\Agents\External\agentStore.ts

// path: src\modules\Agents\External\agentStore.ts

import { create } from "zustand";

import { getRecentAgents } from "./Server/actions";
import { Agent } from "../types";

interface AgentState {
    activeAgent: Agent | null;
    recentAgents: Agent[];
    setActiveAgent: (agent: Agent | null) => void;
    setRecentAgents: (agents: Agent[]) => void;
    refreshRecentAgents: () => Promise<void>;
}

export const useAgentStore = create<AgentState>((set) => ({
    activeAgent: null,
    recentAgents: [],

    setActiveAgent: (agent: Agent | null) => {
        set((state) => {
            if (state.activeAgent?.agent_id !== agent?.agent_id) {
                return { activeAgent: agent };
            }
            return state;
        });
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
