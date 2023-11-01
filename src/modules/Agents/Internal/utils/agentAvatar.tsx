//path: src\modules\Agents\Internal\utils\agentAvatar.tsx

import { toLower } from "lodash";

import { Placeholder } from "../data/placeholder";
import { Agent } from "../../types";

export const agentAvatar = (agent: Agent | null) => {
    if (!agent) return Placeholder;

    const agentName = toLower(agent.agent_name).replace(/\s+/g, "");
    const path = `/avatars/${agentName}.png`;
    return path;
};
