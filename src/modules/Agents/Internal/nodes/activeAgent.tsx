//path: src\modules\Agents\Internal\nodes\activeAgent.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { CardPreset, Composer, DivAtom } from "@modules/Composer";
import { NodeSelection, OnDoubleClick } from "@modules/Graph";
import { useAgentStore } from "../../External/agentStore";
import { agentAvatar } from "../utils/agentAvatar";
import { CustomNode } from "@modules/Graph/types";
import { IsNullOrEmpty } from "@modules/Utils";
import { useDrawer } from "@modules/Drawer";

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
    .withStyle("flex-col")
    .withStyle("flex")
    .withStyle("px-1")
    .build();

const ActiveAgent = React.memo((props: NodeProps) => {
    const nodeData = props.data as CustomNode;
    const activeAgent = useAgentStore((state) => state.activeAgent);
    const reactFlowInstance = useReactFlow();
    const allNodes = reactFlowInstance.getNodes();
    const { openDrawer } = useDrawer();
    const [imageError, setImageError] = useState<boolean>(false);

    useEffect(() => {
        setImageError(false);
    }, [activeAgent]);

    return (
        <Card
            onDoubleClick={() => OnDoubleClick(nodeData, openDrawer)}
            className={NodeSelection(props.id, allNodes)}>
            <AvatarPill>
                <Image
                    width={128}
                    height={128}
                    src={
                        imageError
                            ? "/avatars/placeholder.png"
                            : agentAvatar(activeAgent)
                    }
                    alt={`Agent avatar`}
                    className="w-40p rounded-full object-fill"
                    onError={() => {
                        setImageError(true);
                    }}
                />
                <AvatarLabel className="h-auto w-60p">
                    <p className="line-clamp-1 text-xs font-bold text-aqua underline">
                        {activeAgent?.agent_name}
                    </p>
                    <p className="mb-0.5 line-clamp-5 pr-1.5 text-justify text-tny leading-tight text-night-title capitalize-first">
                        {activeAgent && !IsNullOrEmpty(activeAgent.persona)
                            ? activeAgent.persona
                            : "This is where the description of the agent's personality is displayed."}
                    </p>
                </AvatarLabel>
            </AvatarPill>
        </Card>
    );
});

ActiveAgent.displayName = "ActiveAgentNode";
export { ActiveAgent };
