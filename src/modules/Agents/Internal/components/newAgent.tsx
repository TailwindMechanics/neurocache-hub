//path: src\modules\Agents\Internal\components\newAgent.tsx

import { FC } from "react";

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
const Button = new Composer("NewAgentButton", ButtonPreset)
    .withStyle("border-2")
    .withStyle("text-xl")
    .withStyle("py-1")
    .withRoundedButton()
    .build();
const Input = new Composer("NewAgentInput", InputPreset)
    .withStyle("border-2")
    .withStyle("text-2xl")
    .withStyle("py-1")
    .withRoundedElement()
    .build();

export const NewAgent: FC = () => {
    return (
        <Wrapper>
            <Input id="agentName" type="text" placeholder="agent name" />
            <Input id="agentRole" type="text" placeholder="agent role" />
            <Button>create</Button>
        </Wrapper>
    );
};
