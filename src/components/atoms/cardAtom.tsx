//path: src\components\atoms\cardAtom.tsx

import ComponentBuilder from "../components/ComponentBuilder";
import { AtomProps } from "@src/types/declarations";
import DivAtom from "./divAtom";
import React from "react";

const Root = new ComponentBuilder(DivAtom)
	.withStyle("-outline-offset-0.04rem")
	.withStyle("outline-night-black")
	.withData("type", "atom-node")
	.withStyle("outline-0.04rem")
	.withStyle("transition-all")
	.withStyle("duration-200")
	.withStyle("ease-in-out")
	.withStyle("outline")
	.withRoundedFrame()
	.withStyle("z-0")
	.withShadow()
	.build();

const CardAtom: React.FC<AtomProps> = (props) => {
	return (
		<Root>
			<div className={props.className}>{props.children}</div>
		</Root>
	);
};

export default CardAtom;
