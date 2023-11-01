//path: src\modules\Agents\Internal\nodes\agentEditor.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import React, { useEffect, useState } from "react";
import { toLower } from "lodash";
import _ from "lodash";

import { useRecentAgents } from "../hooks/useRecentAgents";
import { useActiveAgent } from "../hooks/useActiveAgent";
import { DrawerElement } from "@modules/Drawer/types";
import { AgentInspector } from "../components/agentInspector";
import { TableRow } from "../components/tableRow";
import { CustomNode } from "@modules/Graph/types";
import { NewAgent } from "../components/newAgent";
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
        panelTitle: "New agent",
    },
];

const newAgentText = "new agent +";
const AgentEditor = React.memo((props: NodeProps) => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
    const [sortField, setSortField] = useState<string>("date_modified");
    const { activeAgent, setActiveAgent } = useActiveAgent();
    const { recentAgents, refresh } = useRecentAgents();
    const [sortedAgents, setSortedAgents] = useState<Agent[]>([]);

    const { openDrawer, closeDrawer, isOpen } = useDrawer();
    const nodeConfig = props.data as CustomNode;
    const reactFlowInstance = useReactFlow();
    const allNodes = reactFlowInstance.getNodes();

    useEffect(() => {
        refresh();
    }, [recentAgents, refresh]);

    const sortAgents = (field: string) => {
        setSortField(field);
        setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    };

    useEffect(() => {
        const sorted = _.orderBy(
            recentAgents,
            [
                (agent: Agent) => {
                    if (sortField === "date_modified") {
                        return new Date((agent as any)[sortField]).getTime();
                    }
                    return (agent as any)[sortField];
                },
            ],
            [sortOrder],
        );
        setSortedAgents(sorted);
    }, [recentAgents, sortField, sortOrder]);

    const onRowClick = (agent: Agent) => {
        setActiveAgent(agent);
    };

    useEffect(() => {
        if (!isOpen) setActiveAgent(null);
    }, [isOpen, setActiveAgent]);

    useEffect(() => {
        if (!activeAgent) return;
        if (!activeAgent) return;

        const selectedAgent = recentAgents.find(
            (agent) => agent.agent_name === activeAgent.agent_name,
        );
        if (!selectedAgent) return;

        const EditAgentDrawer: DrawerElement[] = [
            {
                node: <AgentInspector />,
                panelTitle: selectedAgent.agent_name,
            },
        ];

        openDrawer(EditAgentDrawer);
    }, [activeAgent, closeDrawer, openDrawer, recentAgents]);

    const onNewAgentClick = () => {
        setActiveAgent(null);
        openDrawer(NewAgentDrawer);
    };

    return (
        <>
            <Card className={NodeSelection(props.id, allNodes)}>
                <HeaderContent>
                    <div className="pl-1">{toLower(nodeConfig.nodeName)}</div>
                    <Button onClick={onNewAgentClick}>{newAgentText}</Button>
                </HeaderContent>
                <TableContent>
                    <Table className="text-left text-sm text-aqua">
                        <thead className="text-xs font-thin leading-none text-night-title ">
                            <tr>
                                <th></th>
                                <th onClick={() => sortAgents("agent_name")}>
                                    Name{" "}
                                    {sortField === "agent_name" &&
                                        (sortOrder === "asc" ? "▲" : "▼")}
                                </th>
                                <th onClick={() => sortAgents("status")}>
                                    Status{" "}
                                    {sortField === "status" &&
                                        (sortOrder === "asc" ? "▲" : "▼")}
                                </th>
                                <th onClick={() => sortAgents("date_modified")}>
                                    Last Modified{" "}
                                    {sortField === "date_modified" &&
                                        (sortOrder === "asc" ? "▲" : "▼")}
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="leading-none">
                            {sortedAgents?.map((agent) => (
                                <TableRow
                                    isHighlighted={
                                        isOpen &&
                                        activeAgent?.agent_name ===
                                            agent.agent_name
                                    }
                                    onRowClick={onRowClick}
                                    className="pr-2"
                                    firstColClassName="pr-0.5"
                                    lastColClassName="pr-0.5"
                                    key={agent.agent_name}
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
