//path: src\modules\Agents\Internal\components\table.tsx

import React from "react";

import { ButtonPreset, Composer } from "@modules/Composer";
import { Agent } from "@modules/Agents/types";
import { TableRow } from "./tableRow";

interface TableProps {
    agents: Agent[];
}

const Button = new Composer("TableButton", ButtonPreset)
    .withStyle("text-sm")
    .withRoundedFull()
    .build();

const Table: React.FC<TableProps> = ({ agents }) => {
    return (
        <>
            <Button className="w-28">Create new agent</Button>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-aqua">
                    <tbody>
                        {agents.map((agent) => (
                            <TableRow key={agent.name} agent={agent} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;
