//path: src\modules\Composer\Internal\atoms\card.tsx

import React, { FC } from "react";

import { AtomProps } from "../../types";
import { Composer } from "..";

const Root = new Composer.Builder(Composer.Atoms.Div)
    .withStyle("-outline-offset-0.05rem")
    .withStyle("outline-night-black")
    .withData("type", "atom-node")
    .withStyle("hover:outline-1")
    .withStyle("outline-0.04rem")
    .withStyle("outline")
    .withRoundedFrame()
    .withShadow()
    .build();

const Card: FC<AtomProps> = (props) => {
    return (
        <Root>
            <div className={props.className}>{props.children}</div>
        </Root>
    );
};

export default Card;
