//path: src\modules\Agents\Internal\components\newAgent.tsx

// path: src/modules/Agents/Internal/components/NewAgent.tsx

import { FC } from "react";

export const NewAgent: FC = () => {
    return (
        <div className="flex flex-col rounded-lg bg-night-light p-4">
            <h2 className="mb-4 text-xl text-aqua">Create New Agent</h2>
            <label className="mb-2 text-sm text-aqua-light" htmlFor="agentName">
                Agent Name
            </label>
            <input
                className="mb-4 rounded bg-night p-2 text-aqua"
                id="agentName"
                type="text"
                placeholder="Enter agent name"
            />
            <label className="mb-2 text-sm text-aqua-light" htmlFor="agentRole">
                Agent Role
            </label>
            <input
                className="mb-4 rounded bg-night p-2 text-aqua"
                id="agentRole"
                type="text"
                placeholder="Enter agent role"
            />
            <button className="rounded bg-aqua px-4 py-2 text-night">
                Create Agent
            </button>
        </div>
    );
};
