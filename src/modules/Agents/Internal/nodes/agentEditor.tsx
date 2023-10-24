//path: src\modules\Agents\Internal\nodes\agentEditor.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import { toLower } from "lodash";
import React, { useState } from "react";

import { DrawerElement } from "@modules/Drawer/types";
import { sampleAgents } from "../data/sampleAgents";
import { CustomNode } from "@modules/Graph/types";
import { NewAgent } from "../components/newAgent";
import { TableRow } from "../components/tableRow";
import { NodeSelection } from "@modules/Graph";
import { Agent } from "@modules/Agents/types";
import { Table } from "../components/table";
import { useDrawer } from "@modules/Drawer";
import {
    GhostButtonPreset,
    ContentPreset,
    CardPreset,
    Composer,
    DivAtom,
} from "@modules/Composer";
import { EditAgent } from "../components/editAgent";

const Card = new Composer("AgentEditorCard", CardPreset)
    .withStyle("w-256")
    .withStyle("p-1.5")
    .withRoundedFrame()
    .build();
const Button = new Composer("TableButton", GhostButtonPreset)
    .withStyle("leading-tight")
    .withStyle("text-xs")
    .withStyle("w-[22%]")
    .withRoundedFull()
    .build();
const HeaderContent = new Composer("AgentEditorContent", DivAtom)
    .withStyle("border-night-light")
    .withStyle("text-night-title")
    .withStyle("justify-between")
    .withStyle("bg-night")
    .withStyle("font-bold")
    .withStyle("border")
    .withStyle("px-0.5")
    .withStyle("flex")
    .withRoundedElement()
    .build();
const TableContent = new Composer("AgentEditorContent", ContentPreset)
    .withStyle("border-night")
    .withStyle("pt-0.5")
    .withStyle("px-1")
    .withStyle("pb-1")
    .withRoundedFrame()
    .build();
const NewAgentDrawer: DrawerElement[] = [
    {
        node: <NewAgent />,
        panelTitle: "new agent:",
    },
];

const newAgentText = "new agent +";
const AgentEditor = React.memo((props: NodeProps) => {
    const reactFlowInstance = useReactFlow();
    const allNodes = reactFlowInstance.getNodes();
    const nodeConfig = props.data as CustomNode;
    const { openDrawer, isOpen } = useDrawer();
    const [selectedRow, setSelectedRow] = useState<string | null>(null);

    const onEditClick = (agent: Agent) => {
        setSelectedRow(agent.name);
        const EditAgentDrawer: DrawerElement[] = [
            {
                node: <EditAgent agent={agent} />,
                panelTitle: `edit agent: ${toLower(agent.name)}`,
            },
        ];
        openDrawer(EditAgentDrawer);
    };

    return (
        <>
            <Card className={NodeSelection(props.id, allNodes)}>
                <HeaderContent>
                    <div className="pl-1">{toLower(nodeConfig.nodeName)}</div>
                    <Button
                        onClick={() => {
                            setSelectedRow(null);
                            openDrawer(NewAgentDrawer);
                        }}>
                        {newAgentText}
                    </Button>
                </HeaderContent>
                <TableContent>
                    <Table className="text-left text-sm text-aqua">
                        <thead className="text-xs font-thin leading-none text-night-title ">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Created</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="leading-none">
                            {sampleAgents.map((agent) => (
                                <TableRow
                                    isHighlighted={
                                        isOpen && selectedRow === agent.name
                                    }
                                    onEditClick={onEditClick}
                                    className="pr-2"
                                    firstColClassName="pr-0.5"
                                    lastColClassName="pr-0.5"
                                    key={agent.name}
                                    agent={agent}
                                />
                            ))}
                        </tbody>
                    </Table>
                </TableContent>
            </Card>
        </>
    );
});

AgentEditor.displayName = "AgentEditor";
export { AgentEditor };
