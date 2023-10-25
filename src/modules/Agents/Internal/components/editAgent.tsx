//path: src\modules\Agents\Internal\components\editAgent.tsx

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment";

import { RandomAvatar } from "@modules/Imagen/External/Server/randomAvatar";
import { Refresh } from "@modules/Icons/External/icons";
import { agentRoles } from "../data/sampleAgents";
import { IsNullOrEmpty } from "@modules/Utils";
import { Agent } from "@modules/Agents/types";
import {
    ButtonPreset,
    DropdownAtom,
    InputPreset,
    SwitchAtom,
    Composer,
    DivAtom,
    RoundButtonPreset,
} from "@modules/Composer";
import { AvatarResponse } from "@modules/Imagen/types";

const Wrapper = new Composer("EditAgentWrapper", DivAtom)
    .withStyle("space-y-2")
    .withStyle("flex-col")
    .withStyle("flex")
    .withStyle("px-2")
    .withStyle("py-3")
    .withRoundedElement()
    .build();
const SaveButton = new Composer("EditAgentSaveButton", ButtonPreset)
    .withStyle("border-2")
    .withStyle("text-xl")
    .withStyle("py-1")
    .withRoundedElement()
    .build();
const Input = new Composer("EditAgentInput", InputPreset)
    .withStyle("border-2")
    .withStyle("text-2xl")
    .withStyle("py-1")
    .withRoundedElement()
    .build();
const DatesLabel = new Composer("EditAgentDatesLabel", DivAtom)
    .withStyle("border-night-light")
    .withStyle("text-night-title")
    .withStyle("text-center")
    .withStyle("font-bold")
    .withStyle("flex-col")
    .withStyle("border-2")
    .withStyle("text-md")
    .withStyle("py-0.5")
    .withStyle("italic")
    .withStyle("flex")
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

interface EditAgentProps {
    agent: Agent;
}

export const EditAgent: FC<EditAgentProps> = (props) => {
    const [enabled, setEnabled] = useState(false);
    const [avatarDescription, setAvatarDescription] = useState<string>("");
    const [imageIsLoading, setImageIsLoading] = useState<boolean>(false);
    const [avatar, setAvatar] = useState<AvatarResponse>({
        avatarPrompt: { description: "", expression: "", prompt: "" },
        imageUrls: [props.agent.imgUrl],
    });

    const onImageClick = async () => {
        setImageIsLoading(true);
        const response = await RandomAvatar();
        if (response) {
            setAvatar(response);
        }
    };

    useEffect(() => {
        setAvatar({
            avatarPrompt: { description: "", expression: "", prompt: "" },
            imageUrls: [props.agent.imgUrl],
        });
        setAvatarDescription("");
    }, [props.agent]);

    useEffect(() => {
        setEnabled(props.agent.status);
    }, [props.agent.status]);

    const handleRoleSelect = (selectedRole: string) => {
        console.log("Selected role:", selectedRole);
    };

    return (
        <Wrapper>
            <ImageSection>
                <ImageButton
                    className={imageIsLoading ? "animate-spin" : ""}
                    onClick={onImageClick}>
                    {IsNullOrEmpty(avatar.imageUrls[0]) ? (
                        <Refresh className="h-10 w-auto rounded-full" />
                    ) : (
                        <Image
                            width={64}
                            height={64}
                            src={avatar.imageUrls[0]}
                            alt={`${props.agent.name} avatar`}
                            className="h-12 w-auto rounded-full object-fill"
                            onLoad={() => {
                                setImageIsLoading(false);
                                setAvatarDescription(
                                    avatar.avatarPrompt.description,
                                );
                            }}
                        />
                    )}
                </ImageButton>
                <p className="px-2 text-center text-sm font-bold italic text-night-title underline capitalize-first">
                    {avatarDescription}
                </p>
            </ImageSection>
            <div className="flex justify-center">
                <SwitchAtom enabled={enabled} setEnabled={setEnabled}>
                    {enabled ? "active" : "inactive"}
                </SwitchAtom>
            </div>
            <Input id="agentName" type="text" placeholder={props.agent.name} />
            <DropdownAtom
                value={props.agent.role}
                options={agentRoles}
                onSelect={handleRoleSelect}
            />
            <DatesLabel>
                <p>
                    date modified:{" "}
                    {moment(props.agent.dateModified).format("DD MMM YYYY")}
                </p>
                <p>
                    date created:{" "}
                    {moment(props.agent.dateModified).format("DD MMM YYYY")}
                </p>
            </DatesLabel>
            <SaveButton>save</SaveButton>
        </Wrapper>
    );
};
