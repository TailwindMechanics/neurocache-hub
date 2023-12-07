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
    .withStyle("flex-col")
    .withStyle("p-1.5")
    .withStyle("w-8u")
    .withStyle("h-4.5u")
    .withStyle("flex")
    .withRoundedFrame()
    .build();
const Button = new Composer("AgentCacheTableButton", GhostButtonPreset)
    .withStyle("leading-tight")
    .withStyle("text-xs")
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
    .withStyle("rounded-t-md")
    .withStyle("rounded-b-lg")
    .withStyle("flex-grow")
    .withStyle("flex-col")
    .withStyle("flex")
    .build();

const newAgentText = "new agent +";
const NewAgentDrawer: DrawerElement[] = [
    {
        node: <NewAgent />,
        panelTitle: "New agent",
    },
];

const AgentCache = React.memo((props: NodeProps) => {
    const [sortOrder] = useState<"asc" | "desc">("desc");
    const [sortField] = useState<string>("date_modified");
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
                    <div className="ml-0.5 w-50p">
                        {toLower(nodeData.nodeName)}
                    </div>
                    <Button
                        className="mr-0.5 w-50p text-right"
                        onClick={onNewAgentClick}>
                        {newAgentText}
                    </Button>
                </HeaderContent>
                <TableContent>
                    <Table className="flex flex-grow flex-col text-aqua">
                        <tbody className="leading-none">
                            {sortedAgents?.map((agent) => (
                                <TableRow
                                    isHighlighted={
                                        activeAgent?.agent_name ===
                                        agent.agent_name
                                    }
                                    onRowDoubleClick={onRowDoubleClick}
                                    onRowClick={onRowClick}
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
