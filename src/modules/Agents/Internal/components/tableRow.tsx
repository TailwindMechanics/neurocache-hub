//path: src\modules\Agents\Internal\components\tableRow.tsx

import Image from "next/image";
import { FC } from "react";

import { Composer, ButtonPreset } from "@modules/Composer";
import { Burger } from "@modules/Icons/External/icons";
import { Agent } from "@modules/Agents/types";

interface TableRowProps {
    agent: Agent;
}

const Button = new Composer("TableButton", ButtonPreset)
    .withStyle("text-sm")
    .withRoundedFull()
    .build();

export const TableRow: FC<TableRowProps> = (props) => {
    return (
        <>
            <tr>
                <td className="flex items-center">
                    <Image
                        width={64}
                        height={64}
                        src={props.agent.imgUrl}
                        alt={`${props.agent.name} avatar`}
                        className="h-3 w-auto rounded-full"></Image>
                    {props.agent.name}
                </td>
                <td>{props.agent.role}</td>
                <td>
                    <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        {props.agent.status}
                    </div>
                </td>
                <td>{props.agent.date}</td>
                <td>
                    <Button>
                        <Burger className="h-3 w-3" />
                    </Button>
                </td>
            </tr>
        </>
    );
};
