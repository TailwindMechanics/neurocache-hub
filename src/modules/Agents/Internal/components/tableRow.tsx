//path: src\modules\Agents\Internal\components\tableRow.tsx

import Image from "next/image";
import moment from "moment";
import { FC } from "react";

import { agentStatusStyle } from "../utils/agentStatusStyle";
import { agentAvatar } from "../utils/agentAvatar";
import { Agent } from "../../types";

interface TableRowProps {
    className?: string;
    firstColClassName?: string;
    lastColClassName?: string;
    agent: Agent;
    onRowClick?: (agent: Agent, event: boolean) => void;
    onRowDoubleClick?: (agent: Agent) => void;
    isHighlighted?: boolean;
}

export const TableRow: FC<TableRowProps> = (props) => {
    return (
        <>
            <tr
                tabIndex={0}
                className={`cursor-pointer rounded bg-none hover:bg-aqua-dark hover:text-night-black focus:outline-none ${
                    props.isHighlighted ? "bg-aqua-dark text-night-black" : ""
                }`}
                onDoubleClick={() => props.onRowDoubleClick?.(props.agent)}
                onClick={(e) => {
                    props.onRowClick?.(props.agent, e.shiftKey);
                }}>
                <td className={props.firstColClassName}>
                    <Image
                        width={64}
                        height={64}
                        src={agentAvatar(props.agent)}
                        alt={`${props.agent.agent_name} avatar`}
                        className="h-3 w-auto rounded-full"></Image>
                </td>
                <td className={props.className}>{props.agent.agent_name}</td>
                <td className={agentStatusStyle(props.agent)}>
                    {props.agent.status}
                </td>
                <td className={props.lastColClassName}>
                    {moment(props.agent.date_modified).format(
                        "Do MMM YYYY HH:mm",
                    )}
                </td>
            </tr>
        </>
    );
};
