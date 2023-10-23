//path: src\modules\Agents\Internal\components\newAgent.tsx

import { FC } from "react";

import { Agent } from "@modules/Agents/types";
import {
    ButtonPreset,
    InputPreset,
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
const Button = new Composer("EditAgentButton", ButtonPreset)
    .withStyle("border-2")
    .withStyle("text-xl")
    .withStyle("py-1")
    .withRoundedButton()
    .build();
const Input = new Composer("EditAgentInput", InputPreset)
    .withStyle("border-2")
    .withStyle("text-2xl")
    .withStyle("py-1")
    .withRoundedElement()
    .build();
const Label = new Composer("EditAgentLabel", DivAtom)
    .withStyle("text-xl")
    .withStyle("font-bold")
    .withStyle("text-night-title")
    .withStyle("px-2")
    .withStyle("py-1")
    .build();

interface EditAgentProps {
    agent: Agent;
}

export const EditAgent: FC<EditAgentProps> = (props) => {
    return (
        <Wrapper>
            <Input id="agentName" type="text" placeholder={props.agent.name} />
            <Input id="agentRole" type="text" placeholder={props.agent.role} />
            <Input
                id="agentImageUrl"
                type="url"
                placeholder={props.agent.imgUrl}
            />
            <Label id="agentstatus" type="text" placeholder="status" />
            <Label>date modified: {props.agent.dateModified}</Label>
            <Label>date created: {props.agent.dateCreated}</Label>
            <Button>save</Button>
        </Wrapper>
    );
};
