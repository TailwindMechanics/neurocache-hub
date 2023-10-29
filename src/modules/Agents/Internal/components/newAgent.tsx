//path: src\modules\Agents\Internal\components\newAgent.tsx

import { FC, useState } from "react";
import Image from "next/image";

import { CreateAvatar } from "@modules/Agents/External/Server/createAvatar";
import { CreatePersona } from "../persona/createPersona";
import { agentRoles } from "../data/sampleAgents";
import { Placeholder } from "../data/placeholder";
import { Agent } from "../../types";
import {
    RoundButtonPreset,
    DropdownAtom,
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
const Button = new Composer("NewAgentButton", ButtonPreset)
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

export const NewAgent: FC = () => {
    const handleRoleSelect = (selectedRole: string) => {
        console.log("Selected role:", selectedRole);
    };
    const [activeAgent, setActiveAgent] = useState<Agent>();
    const [imageIsLoading, setImageIsLoading] = useState<boolean>(false);
    const [avatarUrls, setAvatarUrls] = useState<string[]>([]);

    const onImageClick = async () => {
        setImageIsLoading(true);

        const persona = CreatePersona();
        const agent = activeAgent || {};
        agent.persona = persona;

        setActiveAgent(persona);
        setAgentPersona(persona);
        const response = await CreateAvatar(persona);
        if (!response) return;

        setAvatarUrls(response);
    };
    return (
        <Wrapper>
            <ImageSection>
                <ImageButton
                    className={imageIsLoading ? "animate-spin" : ""}
                    onClick={onImageClick}>
                    <Image
                        width={64}
                        height={64}
                        src={avatarUrls[0] || Placeholder}
                        alt={`${agentPersona?.name} avatar`}
                        className="h-14 w-auto rounded-full object-fill"
                        onLoad={() => {
                            setImageIsLoading(false);
                        }}
                    />
                </ImageButton>
                <p className="px-2 text-center text-sm font-bold italic text-night-title underline capitalize-first">
                    {agentPersona?.description || "Agent Description"}
                </p>
            </ImageSection>
            <Input
                className="capitalize-first"
                id="agentName"
                type="text"
                placeholder={agentPersona?.name || "Agent Name"}
            />
            <DropdownAtom
                value={agentRoles[0]}
                options={agentRoles}
                onSelect={handleRoleSelect}
            />
            <Button>create</Button>
        </Wrapper>
    );
};
