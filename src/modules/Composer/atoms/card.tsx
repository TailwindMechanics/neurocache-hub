//path: src\modules\Composer\atoms\card.tsx

import React, { FC } from "react";

import { AtomProps } from "@shared/types";
import Components from "..";

const Root = new Components.Builder(Components.Atoms.Div)
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
