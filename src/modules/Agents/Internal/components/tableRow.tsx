//path: src\modules\Agents\Internal\components\tableRow.tsx

import { toLower } from "lodash";
import Image from "next/image";
import moment from "moment";
import { FC } from "react";

import { Placeholder } from "../data/placeholder";
import { Agent } from "../../types";

interface TableRowProps {
    className?: string;
    firstColClassName?: string;
    lastColClassName?: string;
    agent: Agent;
    onRowClick?: (agent: Agent, event: boolean) => void;
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
                onClick={(e) => {
                    props.onRowClick?.(props.agent, e.shiftKey);
                }}>
                <td className={props.firstColClassName}>
                    <Image
                        width={64}
                        height={64}
                        src={
                            `/avatars/${toLower(props.agent.agent_name)}.png` ||
                            Placeholder
                        }
                        alt={`${props.agent.agent_name} avatar`}
                        className="h-3 w-auto rounded-full"></Image>
                </td>
                <td className={props.className}>{props.agent.agent_name}</td>
                <td className={props.lastColClassName}>
                    {moment(props.agent.date_modified).format("DD MMM YYYY")}
                </td>
            </tr>
        </>
    );
};
