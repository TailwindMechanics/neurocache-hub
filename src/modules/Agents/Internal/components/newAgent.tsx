//path: src\modules\Agents\Internal\components\newAgent.tsx

import { FC, useState } from "react";
import Image from "next/image";

import { createAgent, getMostRecentAgent } from "../../External/Server/actions";
import { useAgentStore } from "../../External/agentStore";
import { agentAvatar } from "../utils/agentAvatar";
import { IsNullOrEmpty } from "@modules/Utils";
import { useDrawer } from "@modules/Drawer";
import {
    ButtonPreset,
    InputPreset,
    Composer,
    DivAtom,
} from "@modules/Composer";

const Wrapper = new Composer("NewAgentWrapper", DivAtom)
    .withStyle("space-y-2")
    .withStyle("flex-col")
    .withStyle("flex")
    .withStyle("px-2")
    .withStyle("py-3")
    .withRoundedElement()
    .build();
const CreateButton = new Composer("NewAgentButton", ButtonPreset)
    .withStyle("border-2")
    .withStyle("text-xl")
    .withStyle("py-1")
    .withRoundedElement()
    .build();
const Input = new Composer("NewAgentInput", InputPreset)
    .withStyle("border-2")
    .withStyle("text-2xl")
    .withStyle("py-1")
    .withRoundedElement()
    .build();
const ImageSection = new Composer("EditAgentImageSection", DivAtom)
    .withStyle("justify-around")
    .withStyle("items-center")
    .withStyle("text-center")
    .withStyle("flex-col")
    .withStyle("flex")
    .withRoundedElement()
    .build();

export const NewAgent: FC = () => {
    const [agentName, setAgentName] = useState<string>();
    const { activeAgent, setActiveAgent, refreshRecentAgents } = useAgentStore(
        (state) => ({
            activeAgent: state.activeAgent,
            setActiveAgent: state.setActiveAgent,
            refreshRecentAgents: state.refreshRecentAgents,
        }),
    );
    const drawer = useDrawer();

    const onCreateClick = async () => {
        if (!agentName || IsNullOrEmpty(agentName)) return;

        await createAgent(agentName);
        const newAgent = await getMostRecentAgent();
        setActiveAgent(newAgent);
        refreshRecentAgents();
        drawer.closeDrawer();
    };

    return (
        <Wrapper>
            <ImageSection>
                <Image
                    width={128}
                    height={128}
                    src={agentAvatar(activeAgent)}
                    alt={`Agent avatar`}
                    className="h-20 w-auto rounded-full object-fill"
                />
            </ImageSection>
            <Input
                onChange={(e) => setAgentName(e.target.value)}
                className="capitalize-first"
                id="agentName"
                type="text"
                placeholder={"Agent Name"}
            />
            <CreateButton onClick={onCreateClick}>create</CreateButton>
        </Wrapper>
    );
};
