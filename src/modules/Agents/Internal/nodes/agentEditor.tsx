//path: src\modules\Agents\Internal\nodes\agentEditor.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import React from "react";

import { sampleAgents } from "../components/sampleAgents";
import { ButtonPreset, CardPreset, Composer } from "@modules/Composer";
import { NodeSelection } from "@modules/Graph";
import Table from "../components/table";
import { TableRow } from "../components/tableRow";

const Card = new Composer("AgentEditorCard", CardPreset)
    .withStyle("flex-col")
    .withStyle("w-256")
    .withStyle("p-1.5")
    .withStyle("flex")
    .withRoundedFrame()
    .build();
const Button = new Composer("TableButton", ButtonPreset)
    .withStyle("leading-tight")
    .withStyle("ml-auto")
    .withStyle("text-xs")
    .withStyle("w-[20%]")
    .withRoundedFull()
    .build();
const AgentEditor = React.memo((props: NodeProps) => {
    const reactFlowInstance = useReactFlow();
    const allNodes = reactFlowInstance.getNodes();

    return (
        <>
            <Card className={NodeSelection(props.id, allNodes)}>
                <Button>+ new agent</Button>
                <Table className="text-left text-sm text-aqua">
                    <thead className="text-xs font-thin leading-none text-night-title ">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="leading-none">
                        {sampleAgents.map((agent) => (
                            <TableRow
                                className="pr-2"
                                firstColClassName="pr-0.5"
                                lastColClassName="pr-0.5"
                                key={agent.name}
                                agent={agent}
                            />
                        ))}
                    </tbody>
                </Table>
            </Card>
        </>
    );
});

AgentEditor.displayName = "AgentEditor";
export { AgentEditor };
