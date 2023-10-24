//path: src\modules\Agents\Internal\components\newAgent.tsx

import { FC } from "react";

import { agentRoles } from "../data/sampleAgents";
import {
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

export const NewAgent: FC = () => {
    const handleRoleSelect = (selectedRole: string) => {
        console.log("Selected role:", selectedRole);
    };
    return (
        <Wrapper>
            <Input id="agentName" type="text" placeholder="agent name" />
            <DropdownAtom
                value={agentRoles[0]}
                options={agentRoles}
                onSelect={handleRoleSelect}
            />
            <Button>create</Button>
        </Wrapper>
    );
};
