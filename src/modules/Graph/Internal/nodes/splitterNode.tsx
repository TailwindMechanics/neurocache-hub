//path: src\modules\Graph\Internal\nodes\splitterNode.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import React, { useEffect } from "react";

import { NodeSelectionState } from "../components/nodeSelectionState";
import { Composer, ShellPreset } from "@modules/Composer";
import { onDoubleClick } from "../utils/nodeInspector";
import { DrawHandle } from "../components/drawHandle";
import { MapOutputIds } from "../utils/mapOutputIds";
import { useNodeFlow } from "../hooks/useNodeFlow";
import { useDrawer } from "@modules/Drawer";
import { CustomNode } from "../../types";
import Icons from "@modules/Icons";

const Card = new Composer("SplitterCard", ShellPreset)
    .withStyle("px-1")
    .build();

const SplitterNode = React.memo((props: NodeProps) => {
    const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
    const nodeData = props.data as CustomNode;
    const allNodes = useReactFlow().getNodes();
    const { openDrawer } = useDrawer();

    useEffect(() => {
        const updateNodeFlowOutputs = () => {
            const outputs = MapOutputIds(nodeFlowValue.ids, nodeData.handles);
            if (outputs && outputs.length > 0) {
                setNodeFlowValue({
                    ids: outputs,
                    payload: nodeFlowValue.payload,
                });
            }
        };

        updateNodeFlowOutputs();
    }, [nodeData.handles, nodeFlowValue, setNodeFlowValue]);

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
            <Card
                onDoubleClick={() => onDoubleClick(nodeData, openDrawer)}
                className={NodeSelectionState(props.id, allNodes)}>
                <Icons.Splitter className="stroke-fill-none h-5 w-4 stroke-aqua-dark text-aqua" />
            </Card>
        </>
    );
});

SplitterNode.displayName = "SplitterNode";
export { SplitterNode };
