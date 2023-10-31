//path: src\modules\Agents\Internal\components\newAgent.tsx

import { FC, useState } from "react";
import Image from "next/image";

import { createAgent, deleteAgent } from "../../External/Server/actions";
import { agentRoles } from "../data/sampleAgents";
import { Placeholder } from "../data/placeholder";
import {
    RoundButtonPreset,
    DropdownAtom,
    ButtonPreset,
    InputPreset,
    Composer,
    DivAtom,
} from "@modules/Composer";
import { useDrawer } from "@modules/Drawer";

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
const DeleteButton = new Composer("NewAgentButton", ButtonPreset)
    .withStyle("border-2")
    .withStyle("text-xl")
    .withStyle("py-1")
    .withStyle("border-red-500")
    .withStyle("text-red-500")
    .withStyle("hover:bg-red-500")
    .withStyle("hover:text-night-dark")
    .withStyle("hover:border-night-dark")
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
    const handleRoleSelect = (selectedRole: string) => {
        console.log("Selected role:", selectedRole);
    };
    const [agentName, setAgentName] = useState<string>();
    const [imageIsLoading, setImageIsLoading] = useState<boolean>(false);

    const drawer = useDrawer();

    const onCreateClick = async () => {
        if (!agentName) return;
        const response = await createAgent(agentName);
        drawer.closeDrawer();

        console.log(response);
    };

    const onDeleteClick = async () => {
        const response = await deleteAgent(
            "157bd58e-bd35-4051-b5d1-ee6ba14d2bf6",
        );
        drawer.closeDrawer();

        console.log(response);
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
                        src={Placeholder}
                        alt={`agent avatar`}
                        className="h-14 w-auto rounded-full object-fill"
                        onLoad={() => {
                            setImageIsLoading(false);
                        }}
                    />
                </ImageButton>
                <p className="px-2 text-center text-sm font-bold italic text-night-title underline capitalize-first">
                    {"Agent Description"}
                </p>
            </ImageSection>
            <Input
                onChange={(e) => setAgentName(e.target.value)}
                className="capitalize-first"
                id="agentName"
                type="text"
                placeholder={"Agent Name"}
            />
            <DropdownAtom
                className="lowercase"
                value={agentRoles[0]}
                options={agentRoles}
                onSelect={handleRoleSelect}
            />
            <CreateButton onClick={onCreateClick}>create</CreateButton>
            <DeleteButton onClick={onDeleteClick}>delete</DeleteButton>
        </Wrapper>
    );
};
