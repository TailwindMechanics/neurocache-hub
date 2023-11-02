//path: src\modules\Agents\Internal\hooks\useActiveAgent.tsx

import { useContext } from "react";

import { AgentContext } from "./agentsContext";

export const useActiveAgent = () => {
    const context = useContext(AgentContext);
    if (!context)
        throw new Error("useActiveAgent must be used within an AgentProvider");
    const { activeAgent, setActiveAgent } = context;
    return { activeAgent, setActiveAgent };
};
