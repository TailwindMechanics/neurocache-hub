//path: src\modules\Agents\Internal\nodes\agentEditor.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import React from "react";

import { sampleAgents } from "../components/sampleAgents";
import {
    ButtonPreset,
    CardPreset,
    Composer,
    ContentPreset,
} from "@modules/Composer";
import { NodeSelection } from "@modules/Graph";
import Table from "../components/table";
import { TableRow } from "../components/tableRow";
import { CustomNode } from "@modules/Graph/types";
import { toLower } from "lodash";

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
const Content = new Composer("AgentEditorContent", ContentPreset)
    .withStyle("bg-night-dark")
    .withStyle("border-night")
    .withStyle("pt-0.5")
    .withStyle("px-1")
    .withStyle("pb-1")
    .withRoundedFrame()
    .build();
const AgentEditor = React.memo((props: NodeProps) => {
    const reactFlowInstance = useReactFlow();
    const allNodes = reactFlowInstance.getNodes();
    const nodeConfig = props.data as CustomNode;
    return (
        <>
            <Card className={NodeSelection(props.id, allNodes)}>
                <div className="flex content-around px-2">
                    <div className="pl-1 font-bold text-aqua-dark">
                        {toLower(nodeConfig.nodeName)}
                    </div>
                    <Button>+ new agent</Button>
                </div>
                <Content>
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
                </Content>
            </Card>
        </>
    );
});

AgentEditor.displayName = "AgentEditor";
export { AgentEditor };
