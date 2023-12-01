//path: src\modules\Agents\Internal\components\agentInspector.tsx

import { FC, useState } from "react";
import Image from "next/image";
import moment from "moment";

import { agentStatusStyle } from "../utils/agentStatusStyle";
import { deleteAgent } from "../../External/Server/actions";
import { useAgentStore } from "../../External/agentStore";
import { agentAvatar } from "../utils/agentAvatar";
import { useDrawer } from "@modules/Drawer";
import {
    DangerButtonPreset,
    RoundButtonPreset,
    InputPreset,
    Composer,
    DivAtom,
    ApiIdBox,
} from "@modules/Composer";

const Wrapper = new Composer("EditAgentWrapper", DivAtom)
    .withStyle("space-y-2")
    .withStyle("flex-col")
    .withStyle("flex")
    .withStyle("px-2")
    .withStyle("py-3")
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

interface AgentInspectorProps {
    className?: string;
}

export const AgentInspector: FC<AgentInspectorProps> = (props) => {
    const [imageIsLoading, setImageIsLoading] = useState<boolean>(false);
    const { activeAgent, setActiveAgent } = useAgentStore((state) => ({
        activeAgent: state.activeAgent,
        setActiveAgent: state.setActiveAgent,
    }));

    const refreshRecentAgents = useAgentStore(
        (state) => state.refreshRecentAgents,
    );

    const drawer = useDrawer();

    const onDeleteClick = async () => {
        if (!activeAgent) return;

        await deleteAgent(activeAgent?.agent_id);
        drawer.closeDrawer();
        refreshRecentAgents();
        setActiveAgent(null);
    };

    return (
        <Wrapper>
            <ImageSection>
                <ImageButton className={imageIsLoading ? "animate-spin" : ""}>
                    <Image
                        width={128}
                        height={128}
                        src={agentAvatar(activeAgent)}
                        alt={`Agent avatar`}
                        className="h-20 w-auto rounded-full object-fill"
                        onLoad={() => {
                            setImageIsLoading(false);
                        }}
                    />
                </ImageButton>
                <p className="px-2 text-center text-sm font-bold italic text-night-title underline capitalize-first">
                    {activeAgent ? activeAgent.persona : "agent persona"}
                </p>
            </ImageSection>
            <Input
                id="agentName"
                type="text"
                placeholder={
                    activeAgent ? activeAgent.agent_name : "agent name"
                }
            />
            <ApiIdBox id={activeAgent ? activeAgent.agent_id : "agen id"} />
            <DatesLabel>
                <div className={`${agentStatusStyle(activeAgent)}`}>
                    <p className={"text-2xl"}>status: {activeAgent?.status}</p>
                </div>
                <p>
                    date modified:{" "}
                    {moment(activeAgent?.date_modified).format(
                        "Do MMM YYYY HH:mm",
                    )}
                </p>
                <p>
                    date created:{" "}
                    {moment(activeAgent?.date_created).format(
                        "Do MMM YYYY HH:mm",
                    )}
                </p>
            </DatesLabel>
            <DangerButtonPreset
                className="rounded border-2 py-1 text-xl"
                onClick={onDeleteClick}>
                delete
            </DangerButtonPreset>
        </Wrapper>
    );
};
