//path: src\modules\Agents\Internal\hooks\agentsContext.tsx

import React, { createContext, useState, ReactNode } from "react";

import { Agent } from "../../types";

interface AgentContextProps {
    activeAgent: Agent | null;
    setActiveAgent: React.Dispatch<React.SetStateAction<Agent | null>>;
    recentAgents: Agent[];
    setRecentAgents: React.Dispatch<React.SetStateAction<Agent[]>>;
}

export const AgentContext = createContext<AgentContextProps | undefined>(
    undefined,
);

interface AgentProviderProps {
    children: ReactNode;
}

export const AgentProvider: React.FC<AgentProviderProps> = ({ children }) => {
    const [activeAgent, setActiveAgent] = useState<Agent | null>(null);
    const [recentAgents, setRecentAgents] = useState<Agent[]>([]);

    return (
        <AgentContext.Provider
            value={{
                activeAgent,
                setActiveAgent,
                recentAgents,
                setRecentAgents,
            }}>
            {children}
        </AgentContext.Provider>
    );
};
