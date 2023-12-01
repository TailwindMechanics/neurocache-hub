//path: src\modules\Agents\Internal\nodes\agentCache.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import React, { useEffect, useState } from "react";
import { toLower } from "lodash";
import _ from "lodash";

import { NodeSelection, OnDoubleClick } from "@modules/Graph";
import { AgentInspector } from "../components/agentInspector";
import { useAgentStore } from "../../External/agentStore";
import { DrawerElement } from "@modules/Drawer/types";
import { TableRow } from "../components/tableRow";
import { CustomNode } from "@modules/Graph/types";
import { NewAgent } from "../components/newAgent";
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

const Card = new Composer("AgentCacheCard", CardPreset)
    .withStyle("min-w-12u")
    .withStyle("min-h-5u")
    .withStyle("flex-col")
    .withStyle("p-1.5")
    .withStyle("flex")
    .withRoundedFrame()
    .build();
const Button = new Composer("AgentCacheTableButton", GhostButtonPreset)
    .withStyle("leading-tight")
    .withStyle("text-xs")
    .withStyle("w-[22%]")
    .withRoundedFull()
    .build();
const HeaderContent = new Composer("AgentCacheContent", DivAtom)
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
const TableContent = new Composer("AgentCacheContent", ContentPreset)
    .withStyle("border-night")
    .withStyle("flex-grow")
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
const AgentCache = React.memo((props: NodeProps) => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
    const [sortField, setSortField] = useState<string>("date_modified");
    const { activeAgent, setActiveAgent, recentAgents, refreshRecentAgents } =
        useAgentStore((state) => ({
            activeAgent: state.activeAgent,
            setActiveAgent: state.setActiveAgent,
            recentAgents: state.recentAgents,
            refreshRecentAgents: state.refreshRecentAgents,
        }));
    const [sortedAgents, setSortedAgents] = useState<Agent[]>([]);
    const { openDrawer } = useDrawer();
    const nodeData = props.data as CustomNode;
    const reactFlowInstance = useReactFlow();
    const allNodes = reactFlowInstance.getNodes();

    useEffect(() => {
        refreshRecentAgents();
    }, [refreshRecentAgents]);

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

    const onRowDoubleClick = (agent: Agent) => {
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
    };

    const onNewAgentClick = () => {
        setActiveAgent(null);
        openDrawer(NewAgentDrawer);
    };

    return (
        <>
            <Card className={NodeSelection(props.id, allNodes)}>
                <HeaderContent
                    onDoubleClick={() => OnDoubleClick(nodeData, openDrawer)}>
                    <div className="pl-1">{toLower(nodeData.nodeName)}</div>
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
                                        activeAgent?.agent_name ===
                                        agent.agent_name
                                    }
                                    onRowDoubleClick={onRowDoubleClick}
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

AgentCache.displayName = "AgentCache";
export { AgentCache };
