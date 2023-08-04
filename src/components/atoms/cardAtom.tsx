//path: src\components\atoms\cardAtom.tsx

import ComponentBuilder from "../builders/componentBuilder/ComponentBuilder";
import React, { useState } from "react";
import AtomicDiv from "./atomicDiv";

interface CardAtomProps {
	title: string;
	body: string;
	imageUrl?: string;
	children?: React.ReactNode;
}

const CardAtom: React.FC<CardAtomProps> = (props) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	let RootBox = new ComponentBuilder(AtomicDiv)
		.withStyle("shadow-inner shadow-aqua-d")
		.withStyle("border border-aqua-l")
		.withStyle("rounded-full")
		.withStyle("bg-aqua-d")
		.withStyle("p-6")
		.build();

	const TitleBox = new ComponentBuilder(AtomicDiv)
		.withJustifyContent("start")
		.withFlexDirection("row")
		.withAlignItems("center")
		.withHeight("full")
		.withWidth("full")
		.withSpace("x-2")
		.withFlex()
		.build();

	const TitleButton = new ComponentBuilder(AtomicDiv)
		.withOnClick(() => setIsCollapsed(!isCollapsed))
		.withLabel(props.title)
		.withStyle("text-aqua-p")
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
		.withStyle("p-2")
		.build();

	let Icon = new ComponentBuilder(AtomicDiv)
		.withStyle("border border-aqua-l")
		.withJustifyContent("center")
		.withStyle("text-aqua-p")
		.withImage(props.imageUrl)
		.withStyle("rounded-full")
		.withAlignItems("center")
		.withHeight("8")
		.withWidth("8")
		.withFlex()
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
