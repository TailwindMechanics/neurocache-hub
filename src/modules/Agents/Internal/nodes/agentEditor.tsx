//path: src\modules\Agents\Internal\nodes\agentEditor.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import React, { useEffect, useState } from "react";
import { toLower } from "lodash";
import _ from "lodash";

import { DrawerElement } from "@modules/Drawer/types";
import { EditAgent } from "../components/editAgent";
import { sampleAgents } from "../data/sampleAgents";
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
        panelTitle: "new agent:",
    },
];

const newAgentText = "new agent +";
const AgentEditor = React.memo((props: NodeProps) => {
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>("desc");
    const [sortField, setSortField] = useState<string | null>("dateModified");
    const [selectedRows, setSelectedRows] = useState<string[] | null>([]);
    const [sortedAgents, setSortedAgents] = useState(sampleAgents);
    const { openDrawer, closeDrawer, isOpen } = useDrawer();
    const nodeConfig = props.data as CustomNode;
    const reactFlowInstance = useReactFlow();
    const allNodes = reactFlowInstance.getNodes();

    const sortAgents = (field: string) => {
        setSortField(field);
        setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    };

    useEffect(() => {
        if (!sortField || !sortOrder) return;

        const sorted = _.orderBy(
            sampleAgents,
            [
                (agent: Agent) => {
                    if (sortField === "dateModified") {
                        return (agent as any)[sortField].getTime();
                    }
                    return (agent as any)[sortField];
                },
            ],
            [sortOrder],
        );
        setSortedAgents(sorted);
    }, [sortField, sortOrder]);

    const onRowClick = (agent: Agent, isShiftKey: boolean) => {
        if (!isShiftKey) {
            setSelectedRows([agent.name]);
            return;
        }

        setSelectedRows((prevSelectedRows) => {
            if (!prevSelectedRows) return null;

            const isAlreadySelected = prevSelectedRows.includes(agent.name);
            return isAlreadySelected
                ? prevSelectedRows.filter((row) => row !== agent.name)
                : [...prevSelectedRows, agent.name];
        });
    };

    useEffect(() => {
        if (!selectedRows) return;

        if (selectedRows.length < 1) {
            closeDrawer();
            return;
        }

        const EditAgentDrawer: DrawerElement[] = selectedRows.map(
            (selectedRow) => {
                const selectedAgent = sampleAgents.find(
                    (agent) => agent.name === selectedRow,
                );
                return {
                    node: <EditAgent agent={selectedAgent!} />,
                    panelTitle: `edit agent: ${toLower(selectedAgent!.name)}`,
                };
            },
        );
        openDrawer(EditAgentDrawer);
    }, [selectedRows, openDrawer, closeDrawer]);

    return (
        <>
            <Card className={NodeSelection(props.id, allNodes)}>
                <HeaderContent>
                    <div className="pl-1">{toLower(nodeConfig.nodeName)}</div>
                    <Button
                        onClick={() => {
                            openDrawer(NewAgentDrawer);
                            setSelectedRows(null);
                        }}>
                        {newAgentText}
                    </Button>
                </HeaderContent>
                <TableContent>
                    <Table className="text-left text-sm text-aqua">
                        <thead className="text-xs font-thin leading-none text-night-title ">
                            <tr>
                                <th></th>
                                <th onClick={() => sortAgents("name")}>
                                    Name{" "}
                                    {sortField === "name" &&
                                        (sortOrder === "asc" ? "▲" : "▼")}
                                </th>
                                <th onClick={() => sortAgents("role")}>
                                    Role{" "}
                                    {sortField === "role" &&
                                        (sortOrder === "asc" ? "▲" : "▼")}
                                </th>
                                <th onClick={() => sortAgents("status")}>
                                    Status{" "}
                                    {sortField === "status" &&
                                        (sortOrder === "asc" ? "▲" : "▼")}
                                </th>
                                <th onClick={() => sortAgents("dateModified")}>
                                    Modified{" "}
                                    {sortField === "dateModified" &&
                                        (sortOrder === "asc" ? "▲" : "▼")}
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="leading-none">
                            {sortedAgents.map((agent) => (
                                <TableRow
                                    isHighlighted={
                                        isOpen &&
                                        selectedRows?.includes(agent.name)
                                    }
                                    onRowClick={onRowClick}
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
