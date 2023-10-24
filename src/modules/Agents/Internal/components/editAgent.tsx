//path: src\modules\Agents\Internal\components\editAgent.tsx

import { FC, useEffect, useState } from "react";

import { agentRoles } from "../data/sampleAgents";
import { Agent } from "@modules/Agents/types";
import {
    ButtonPreset,
    DropdownAtom,
    InputPreset,
    SwitchAtom,
    Composer,
    DivAtom,
} from "@modules/Composer";

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

interface EditAgentProps {
    agent: Agent;
}

export const EditAgent: FC<EditAgentProps> = (props) => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        setEnabled(props.agent.status);
    }, [props.agent.status]);

    const handleRoleSelect = (selectedRole: string) => {
        console.log("Selected role:", selectedRole);
    };

    return (
        <Wrapper>
            <div className="flex justify-center">
                <SwitchAtom enabled={enabled} setEnabled={setEnabled} />
            </div>
            <Input id="agentName" type="text" placeholder={props.agent.name} />
            <Input
                id="agentImageUrl"
                type="url"
                placeholder={props.agent.imgUrl}
            />
            <DropdownAtom
                value={props.agent.role}
                options={agentRoles}
                onSelect={handleRoleSelect}
            />
            <DatesLabel>
                <p>date modified: {props.agent.dateModified}</p>
                <p>date created: {props.agent.dateCreated}</p>
            </DatesLabel>
            <SaveButton>save</SaveButton>
        </Wrapper>
    );
};
