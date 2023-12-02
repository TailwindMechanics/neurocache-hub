//path: src\modules\Agents\Internal\components\tableRow.tsx

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment";

import { agentStatusStyle } from "../utils/agentStatusStyle";
import { useAgentStore } from "../../External/agentStore";
import { agentAvatar } from "../utils/agentAvatar";
import { Agent } from "@modules/Agents/types";

interface TableRowProps {
    className?: string;
    agent: Agent;
    onRowClick?: (agent: Agent, event: boolean) => void;
    onRowDoubleClick?: (agent: Agent) => void;
    isHighlighted?: boolean;
}

export const TableRow: FC<TableRowProps> = (props) => {
    const { activeAgent, setActiveAgent } = useAgentStore((state) => ({
        activeAgent: state.activeAgent,
        setActiveAgent: state.setActiveAgent,
    }));

    const [imageError, setImageError] = useState<boolean>(false);

    useEffect(() => {
        setImageError(false);
    }, [activeAgent]);

    return (
        <>
            <tr
                tabIndex={0}
                className={`flex flex-grow cursor-pointer items-center justify-between rounded-full bg-none hover:bg-aqua-dark hover:text-night-black focus:outline-none ${
                    props.isHighlighted ? "bg-aqua-dark text-night-black" : ""
                }`}
                onDoubleClick={() => props.onRowDoubleClick?.(props.agent)}
                onClick={() => setActiveAgent(props.agent)}>
                <td className="flex w-35p items-center">
                    <Image
                        width={64}
                        height={64}
                        src={
                            imageError
                                ? "/avatars/placeholder.png"
                                : agentAvatar(props.agent)
                        }
                        alt={`${props.agent.agent_name} avatar`}
                        className="h-25p w-25p rounded-full"
                        onError={() => {
                            setImageError(true);
                        }}
                    />
                    <p className="line-clamp-1 h-75p w-75p pl-1">
                        {props.agent.agent_name}
                    </p>
                </td>
                <td className={"25p" + agentStatusStyle(props.agent)}>
                    {props.agent.status}
                </td>
                <td className="w-40p">
                    {moment(props.agent.date_modified).format(
                        "Do MMM YYYY HH:mm",
                    )}
                </td>
            </tr>
        </>
    );
};
