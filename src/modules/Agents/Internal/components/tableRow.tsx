//path: src\modules\Agents\Internal\components\tableRow.tsx

import Image from "next/image";
import { FC } from "react";

import { Composer, GhostButtonPreset } from "@modules/Composer";
import { Burger } from "@modules/Icons/External/icons";
import { Agent } from "@modules/Agents/types";

interface TableRowProps {
    className?: string;
    firstColClassName?: string;
    lastColClassName?: string;
    agent: Agent;
    onEditClick?: (agent: Agent) => void;
}

const Button = new Composer("TableButton", GhostButtonPreset)
    .withRoundedFull()
    .build();

export const TableRow: FC<TableRowProps> = (props) => {
    return (
        <>
            <tr className="rounded bg-none hover:bg-aqua-dark hover:text-night-black">
                <td className={props.firstColClassName}>
                    <Image
                        width={64}
                        height={64}
                        src={props.agent.imgUrl}
                        alt={`${props.agent.name} avatar`}
                        className="h-2 w-auto rounded-full"></Image>
                </td>
                <td className={props.className}>{props.agent.name}</td>
                <td className={`lowercase ${props.className}`}>
                    {props.agent.role}
                </td>
                <td className={props.className}>
                    <div
                        className={`rounded-full text-center lowercase ${
                            props.agent.status === "active"
                                ? `bg-aqua-dark font-bold text-night`
                                : `bg-none`
                        }`}>
                        {props.agent.status}
                    </div>
                </td>
                <td className={props.lastColClassName}>
                    {props.agent.dateModified}
                </td>
                <td>
                    <Button onClick={() => props.onEditClick?.(props.agent)}>
                        <Burger className="h-2 w-2" />
                    </Button>
                </td>
            </tr>
        </>
    );
};
