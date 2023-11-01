//path: src\modules\Agents\Internal\nodes\activeAgent.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import Image from "next/image";
import React from "react";

import { CardPreset, Composer, DivAtom } from "@modules/Composer";
import { useActiveAgent } from "../hooks/useActiveAgent";
import { agentAvatar } from "../utils/agentAvatar";
import { NodeSelection } from "@modules/Graph";

const Card = new Composer("ActiveAgentCard", CardPreset)
    .withStyle("w-24")
    .withRoundedFull()
    .build();
const AvatarPill = new Composer("ActiveAgentAvatarPill", DivAtom)
    .withStyle("border-night-light")
    .withStyle("bg-night-black")
    .withStyle("border-1")
    .withStyle("border")
    .withStyle("flex")
    .withRoundedFull()
    .build();
const AvatarLabel = new Composer("ActiveAgentAvatarLabel", DivAtom)
    .withStyle("pl-1")
    .build();

const ActiveAgent = React.memo((props: NodeProps) => {
    const { activeAgent } = useActiveAgent();
    const reactFlowInstance = useReactFlow();
    const allNodes = reactFlowInstance.getNodes();

    return (
        <Card className={NodeSelection(props.id, allNodes)}>
            <AvatarPill>
                <Image
                    width={128}
                    height={128}
                    src={agentAvatar(activeAgent)}
                    alt={`Agent avatar`}
                    className="h-7 w-7 rounded-full object-fill"
                />
                <AvatarLabel>
                    <p className="text-xs font-bold text-aqua underline">
                        {activeAgent?.agent_name}
                    </p>
                    <p className="text-tny leading-tight text-night-title capitalize-first">
                        {"A plump insane Irish librarian granny."}
                    </p>
                </AvatarLabel>
            </AvatarPill>
        </Card>
    );
});

ActiveAgent.displayName = "ActiveAgentNode";
export { ActiveAgent };
