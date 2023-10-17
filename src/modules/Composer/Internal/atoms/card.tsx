//path: src\modules\Composer\Internal\atoms\card.tsx

import React, { FC } from "react";

import { ComponentBuilder } from "../components/ComponentBuilder";
import { AtomProps } from "../../types";
import { Div as DivAtom } from "./div";

const Root = new ComponentBuilder("CardAtom", DivAtom)
    .withStyle("-outline-offset-0.05rem")
    .withStyle("outline-night-black")
    .withData("type", "atom-node")
    .withStyle("hover:outline-1")
    .withStyle("outline-0.04rem")
    .withStyle("outline")
    .withRoundedFrame()
    .withShadow()
    .build();

export const Card: FC<AtomProps> = (props) => {
    return (
        <Root>
            <div className={props.className}>{props.children}</div>
        </Root>
    );
};
