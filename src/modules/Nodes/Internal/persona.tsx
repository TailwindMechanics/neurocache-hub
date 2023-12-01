//path: src\modules\Nodes\Internal\persona.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import React from "react";

import { DrawHandle, OnDoubleClick, NodeSelection } from "@modules/Graph";
import { Composer, ShellPreset } from "@modules/Composer";
import { CustomNode } from "@modules/Graph/types";
import { useDrawer } from "@modules/Drawer";
import Icons from "@modules/Icons";

const Card = new Composer("PersonaCard", ShellPreset)
    .withStyle("py-0.5")
    .withStyle("px-1")
    .build();

const Persona = React.memo((props: NodeProps) => {
    const nodeData = props.data as CustomNode;
    const allNodes = useReactFlow().getNodes();
    const { openDrawer } = useDrawer();

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
                onDoubleClick={() => OnDoubleClick(nodeData, openDrawer)}
                className={NodeSelection(props.id, allNodes)}>
                <Icons.User className="h-5 w-4 fill-night-black stroke-aqua stroke-20 text-night-dark" />
            </Card>
        </>
    );
});

Persona.displayName = "Persona";
export { Persona };
