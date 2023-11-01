//path: src\modules\Agents\Internal\components\newAgent.tsx

import { FC, useState } from "react";
import Image from "next/image";

import { createAgent } from "../../External/Server/actions";
import { useRecentAgents } from "../hooks/useRecentAgents";
import { useActiveAgent } from "../hooks/useActiveAgent";
import { agentAvatar } from "../utils/agentAvatar";
import { IsNullOrEmpty } from "@modules/Utils";
import { useDrawer } from "@modules/Drawer";
import {
    RoundButtonPreset,
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
const ImageButton = new Composer("EditAgentImageButton", RoundButtonPreset)
    .withStyle("border-2")
    .withStyle("text-xl")
    .withRoundedElement()
    .build();

const onImageClick = async () => {};

export const NewAgent: FC = () => {
    const [agentName, setAgentName] = useState<string>();
    const [imageIsLoading, setImageIsLoading] = useState<boolean>(false);
    const { activeAgent } = useActiveAgent();
    const { refresh } = useRecentAgents();
    const drawer = useDrawer();

    const onCreateClick = async () => {
        if (!agentName || IsNullOrEmpty(agentName)) return;

        await createAgent(agentName);
        refresh();
        drawer.closeDrawer();
    };

    return (
        <Wrapper>
            <ImageSection>
                <ImageButton
                    className={imageIsLoading ? "animate-spin" : ""}
                    onClick={onImageClick}>
                    <Image
                        width={128}
                        height={128}
                        src={agentAvatar(activeAgent)}
                        alt={`agent avatar`}
                        className="h-20 w-auto rounded-full object-fill"
                        onLoad={() => {
                            setImageIsLoading(false);
                        }}
                    />
                </ImageButton>
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
