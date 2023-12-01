//path: src\modules\Agents\Internal\nodes\activeAgent.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import Image from "next/image";
import React from "react";

import { CardPreset, Composer, DivAtom } from "@modules/Composer";
import { NodeSelection, OnDoubleClick } from "@modules/Graph";
import { useAgentStore } from "../../External/agentStore";
import { agentAvatar } from "../utils/agentAvatar";
import { CustomNode } from "@modules/Graph/types";
import { useDrawer } from "@modules/Drawer";
import { IsNullOrEmpty } from "@modules/Utils";

const Card = new Composer("ActiveAgentCard", CardPreset)
    .withStyle("h-2.5u")
    .withStyle("w-5.5u")
    .withRoundedFull()
    .build();
const AvatarPill = new Composer("ActiveAgentAvatarPill", DivAtom)
    .withStyle("border-night-light")
    .withStyle("bg-night-black")
    .withStyle("border-1")
    .withStyle("border")
    .withStyle("w-full")
    .withStyle("h-full")
    .withStyle("flex")
    .withRoundedFull()
    .build();
const AvatarLabel = new Composer("ActiveAgentAvatarLabel", DivAtom)
    .withStyle("overflow-hidden")
    .withStyle("justify-center")
    .withStyle("flex")
    .withStyle("flex-col")
    .withStyle("px-1")
    .build();

const ActiveAgent = React.memo((props: NodeProps) => {
    const nodeData = props.data as CustomNode;
    const activeAgent = useAgentStore((state) => state.activeAgent);
    const reactFlowInstance = useReactFlow();
    const allNodes = reactFlowInstance.getNodes();
    const { openDrawer } = useDrawer();

    return (
        <Card
            onDoubleClick={() => OnDoubleClick(nodeData, openDrawer)}
            className={NodeSelection(props.id, allNodes)}>
            <AvatarPill>
                <Image
                    width={128}
                    height={128}
                    src={agentAvatar(activeAgent)}
                    alt={`Agent avatar`}
                    className="h-2u w-2u rounded-full object-fill"
                />
                <AvatarLabel>
                    <p className="text-xs font-bold text-aqua underline">
                        {activeAgent?.agent_name}
                    </p>
                    <div className="max-w-2u">
                        <p className="text-tny leading-tight text-night-title capitalize-first">
                            {activeAgent && !IsNullOrEmpty(activeAgent.persona)
                                ? activeAgent.persona
                                : "This is where the description of the agent's personality is displayed."}
                        </p>
                    </div>
                </AvatarLabel>
            </AvatarPill>
        </Card>
    );
});

ActiveAgent.displayName = "ActiveAgentNode";
export { ActiveAgent };
