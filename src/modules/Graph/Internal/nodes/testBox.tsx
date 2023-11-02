//path: src\modules\Graph\Internal\nodes\testBox.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import { useState, useTransition } from "react";
import React from "react";

import { NodeSelectionState } from "../components/nodeSelectionState";
import { DrawHandle } from "../components/drawHandle";
import { CustomNode, Graph } from "../../types";
import {
    StatusPreset,
    ButtonPreset,
    CardPreset,
    Composer,
} from "@modules/Composer";

const Card = new Composer("TestBoxCard", CardPreset).withRoundedFrame().build();
const Button = new Composer("TestBoxButton", ButtonPreset)
    .withStyle("px-2")
    .withRoundedButton()
    .build();

const TestBox = React.memo((props: NodeProps) => {
    let [isPending, startTransition] = useTransition();
    const nodeData = props.data as CustomNode;
    const allNodes = useReactFlow().getNodes();
    const reactFlowInstance = useReactFlow();
    const [isLoading, setIsLoading] = useState({
        loading: false,
        message: "idle",
        detail: "idle",
    });

    const nodes = reactFlowInstance.getNodes();
    const edges = reactFlowInstance.getEdges();
    const viewport = reactFlowInstance.getViewport();
    const graphData: Graph = {
        nodes: nodes,
        edges: edges,
        viewport: viewport,
    };

    return (
        <>
            {nodeData.handles?.map((handle, index) => (
                <DrawHandle
                    key={index}
                    handle={handle}
                    nodeData={nodeData}
                    index={index}
                />
            ))}
            <Card className={NodeSelectionState(props.id, allNodes)}>
                <StatusPreset newStatus={isLoading.message} />
                <StatusPreset newStatus={isPending.valueOf.toString()} />
                <Button>Test</Button>
            </Card>
        </>
    );
});

const reflect_nodeData = {
    nodeType: "test_box",
    nodeName: "Test",
    category: "Unhidden",
    nodeId: "test_box_1",
    body: "This is for testing.",
    handles: [
        {
            id: "out_test_box_60e9b8e9a7f1d8c774h2",
            type: "source",
            offset: { x: 100.33, y: 40 },
            angle: 90,
        },
    ],
    nodePosition: { x: 100, y: 0 },
    nodeComponent: TestBox,
} as CustomNode;

TestBox.displayName = "TestBox";
export { TestBox };
