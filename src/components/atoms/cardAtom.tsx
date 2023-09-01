//path: src\components\atoms\cardAtom.tsx

import ComponentBuilder from "../builders/ComponentBuilder";
import React, { ReactNode, useState } from "react";
import AtomicDiv from "./atomicDiv";

interface CardAtomProps {
	children?: ReactNode;
	imageUrl?: string;
	title: string;
	body: string;
}

const CardAtom: React.FC<CardAtomProps> = (props: CardAtomProps) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	let RootBox = new ComponentBuilder(AtomicDiv)
		.withStyle("shadow-inner shadow-aqua-d")
		.withStyle("border border-aqua-l")
		.withStyle("rounded-full")
		.withStyle("bg-aqua-d")
		.withStyle("p-6")
		.build();

	const TitleBox = new ComponentBuilder(AtomicDiv)
		.withStyle("justify-center")
		.withStyle("items-center")
		.withStyle("space-x-2")
		.withStyle("flex-row")
		.withStyle("w-full")
		.withStyle("h-full")
		.withStyle("flex")
		.build();

	const TitleButton = new ComponentBuilder(AtomicDiv)
		.withOnClick(() => setIsCollapsed(!isCollapsed))
		.withStyle("text-aqua-p")
		.withLabel(props.title)
		.withPointerCursor()
		.withKeyboardNav()
		.build();

	let BodyText = new ComponentBuilder(AtomicDiv)
		.withStyle("border border-aqua-l")
		.withStyle("whitespace-pre-line")
		.withStyle("text-aqua-p")
		.withStyle("rounded-full")
		.withLabel(props.body)
		.withStyle("text-sm")
		.withStyle("mt-2")
		.withStyle("mx-6")
		.withStyle("p-2")
		.build();

	let Icon = new ComponentBuilder(AtomicDiv)
		.withStyle("border border-aqua-l")
		.withStyle("justify-center")
		.withStyle("text-aqua-p")
		.withImage(props.imageUrl)
		.withStyle("rounded-full")
		.withStyle("items-center")
		.withStyle("flex")
		.withStyle("w-8")
		.withStyle("h-8")
		.build();

	return (
		<>
			<RootBox>
				<TitleBox>
					<Icon />
					<TitleButton />
				</TitleBox>
				{isCollapsed ? null : (
					<>
						<BodyText />
						{props.children}
					</>
				)}
			</RootBox>
		</>
	);
};

export default CardAtom;