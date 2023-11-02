//path: src\modules\Agents\Internal\hooks\useRecentAgents.tsx

import { useState, useCallback } from "react";

import { getRecentAgents } from "../../External/Server/actions";
import { Agent } from "../../types";

export const useRecentAgents = () => {
    const [recentAgents, setRecentAgents] = useState<Agent[]>([]);

    const refresh = useCallback(async () => {
        const agents = await getRecentAgents();
        setRecentAgents(() => agents);
    }, []);

    return { recentAgents, refresh };
};
