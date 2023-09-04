//path: src\components\atoms\cardAtom.tsx

import ComponentBuilder from "../builders/ComponentBuilder";
import React, { ReactNode } from "react";
import AtomicDiv from "./atomicDiv";

interface CardAtomProps {
	children?: ReactNode;
	title: string;
	body: string;
}

const CardAtom: React.FC<CardAtomProps> = (props: CardAtomProps) => {
	const RootBox = new ComponentBuilder(AtomicDiv)
		.withStyle(`drop-shadow-[-5px_12px_2px_rgba(0,0,20,.72)]`)
		.withStyle("rounded-b-xl rounded-t-md")
		.build();

	return (
		<>
			<RootBox>{props.children}</RootBox>
		</>
	);
};

export default CardAtom;
