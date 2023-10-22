//path: src\modules\Agents\Internal\nodes\agentEditor.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import React from "react";

import { sampleAgents } from "../components/sampleAgents";
import { CardPreset, Composer } from "@modules/Composer";
import { NodeSelection } from "@modules/Graph";
import Table from "../components/table";

const Card = new Composer("AgentEditorCard", CardPreset)
    .withStyle("w-256")
    // .withStyle("h-72")
    .withStyle("flex")
    .withStyle("flex-col")
    .withRoundedFrame()
    .build();

const AgentEditor = React.memo((props: NodeProps) => {
    const reactFlowInstance = useReactFlow();
    const allNodes = reactFlowInstance.getNodes();

    return (
        <>
            <Card className={NodeSelection(props.id, allNodes)}>
                <Table agents={sampleAgents} />
            </Card>
        </>
    );
});

AgentEditor.displayName = "AgentEditor";
export { AgentEditor };
