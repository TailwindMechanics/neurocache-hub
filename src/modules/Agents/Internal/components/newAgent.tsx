//path: src\modules\Agents\Internal\components\newAgent.tsx

import { FC, useState } from "react";
import Image from "next/image";

import { RandomAvatar } from "@modules/Imagen/External/Server/randomAvatar";
import { AvatarResponse } from "@modules/Imagen/types";
import { agentRoles } from "../data/sampleAgents";
import { Placeholder } from "@modules/Imagen";
import {
    RoundButtonPreset,
    DropdownAtom,
    ButtonPreset,
    InputPreset,
    Composer,
    DivAtom,
} from "@modules/Composer";
import { GenerateName } from "@modules/Textgen/External/Server/generateName";

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
    const [agentName, setAgentName] = useState<string>("new agent");
    const [imageIsLoading, setImageIsLoading] = useState<boolean>(false);
    const [avatar, setAvatar] = useState<AvatarResponse>({
        avatarPrompt: { description: "", expression: "", prompt: "" },
        imageUrls: [],
    });

    const onImageClick = async () => {
        setImageIsLoading(true);
        const response = await RandomAvatar();
        if (!response) return;

        setAvatar(response);
        const name = await GenerateName(response.avatarPrompt.description);
        if (name) setAgentName(name);
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
                        src={avatar.imageUrls[0] || Placeholder}
                        alt={`${agentName} avatar`}
                        className="h-14 w-auto rounded-full object-fill"
                        onLoad={() => {
                            setImageIsLoading(false);
                        }}
                    />
                </ImageButton>
                <p className="px-2 text-center text-sm font-bold italic text-night-title underline capitalize-first">
                    {avatar.avatarPrompt.description}
                </p>
            </ImageSection>
            <Input
                className="capitalize-first"
                onChange={(e) => setAgentName(e.target.value)}
                id="agentName"
                type="text"
                placeholder={agentName}
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
