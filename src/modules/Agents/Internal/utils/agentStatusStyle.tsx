//path: src\modules\Agents\Internal\utils\agentStatusStyle.tsx

import { Agent } from "../../types";

export const agentStatusStyle = (agent: Agent | null) => {
    const className = "font-mono pt-0.5 pr-1.5 text-xs";
    if (agent?.status === "idle") return `${className}`;
    if (agent?.status === "active") return `${className} text-lime-light`;
    if (agent?.status === "disabled") return `${className} text-night-title`;
    if (agent?.status === "error")
        return `${className} animate-bounce text-cherry-dark`;
    if (agent?.status === "running")
        return `${className} text-lemon-light animate-pulse`;
    else return className;
};
