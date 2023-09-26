//path: src\components\atoms\cardAtom.tsx

import ComponentBuilder from "../builders/ComponentBuilder";
import React, { ReactNode } from "react";
import AtomicDiv from "./atomicDiv";

interface CardAtomProps {
	children?: ReactNode;
	title: string;
	body: string;
	className?: string;
}

const RootBox = new ComponentBuilder(AtomicDiv)
	.withStyle(`drop-shadow-[-4px_10px_1px_rgba(0,0,20,.72)]`)
	.build();

const CardAtom: React.FC<CardAtomProps> = (props: CardAtomProps) => {
	return (
		<>
			<RootBox
				className={`rounded-b-2xl rounded-t-lg ${props.className}`}
			>
				{props.children}
			</RootBox>
		</>
	);
};

export default CardAtom;
