//path: src\modules\Agents\Internal\components\editAgent.tsx

import { FC, useState } from "react";
import Image from "next/image";
import moment from "moment";

import { useActiveAgent } from "../hooks/useActiveAgent";
import { deleteAgent } from "../../External/Server/actions";
import { Placeholder } from "../data/placeholder";
import { useDrawer } from "@modules/Drawer";
import { Agent } from "../../types";
import {
    DangerButtonPreset,
    RoundButtonPreset,
    ButtonPreset,
    DropdownAtom,
    InputPreset,
    SwitchAtom,
    Composer,
    DivAtom,
} from "@modules/Composer";
import { useRecentAgents } from "../hooks/useRecentAgents";

const Wrapper = new Composer("EditAgentWrapper", DivAtom)
    .withStyle("space-y-2")
    .withStyle("flex-col")
    .withStyle("flex")
    .withStyle("px-2")
    .withStyle("py-3")
    .withRoundedElement()
    .build();
const EditButton = new Composer("EditAgentSaveButton", ButtonPreset)
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
    const { activeAgent, setActiveAgent } = useActiveAgent();
    const { refresh } = useRecentAgents();
    const drawer = useDrawer();

    const onDeleteClick = async () => {
        if (!activeAgent) return;

        await deleteAgent(activeAgent?.agent_id);
        drawer.closeDrawer();
        refresh();
    };

    const onEditClick = async () => {
        setActiveAgent(props.agent);
    };

    const handleRoleSelect = (selectedRole: string) => {
        console.log("Selected role:", selectedRole);
    };

    return (
        <Wrapper>
            <ImageSection>
                <ImageButton className={imageIsLoading ? "animate-spin" : ""}>
                    <Image
                        width={64}
                        height={64}
                        src={Placeholder}
                        alt={`Agent avatar`}
                        className="h-14 w-auto rounded-full object-fill"
                        onLoad={() => {
                            setImageIsLoading(false);
                            setAvatarDescription("Agent description");
                        }}
                    />
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
            <Input id="agentName" type="text" placeholder={"agent name"} />
            <DropdownAtom
                value={"role 0"}
                options={["role 1", "role 2", "role 3"]}
                onSelected={handleRoleSelect}
            />
            <DatesLabel>
                <p>
                    date modified:{" "}
                    {moment(props.agent?.date_modified).format("DD MMM YYYY")}
                </p>
                <p>
                    date created:{" "}
                    {moment(props.agent?.date_created).format("DD MMM YYYY")}
                </p>
            </DatesLabel>
            <EditButton onClick={onEditClick}>edit</EditButton>
            <DangerButtonPreset
                className="rounded border-2 py-1 text-xl"
                onClick={onDeleteClick}>
                delete
            </DangerButtonPreset>
        </Wrapper>
    );
};
