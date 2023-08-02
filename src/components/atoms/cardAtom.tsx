//path: src\components\atoms\cardAtom.tsx

import TypographyBuilder from "../builders/typographyBuilder/TypographyBuilder";
import LayoutBuilder from "../builders/layoutBuilder/LayoutBuilder";
import StyleBuilder from "../builders/styleBuilder/StyleBuilder";
import { Style } from "@src/types/declarations";
import React, { useState } from "react";
import ButtonAtom from "./buttonAtom";
import AtomicDiv from "./atomicDiv";

interface CardAtomProps {
	style: Style["Category"];
	title: string;
	body: string;
	imageUrl?: string;
}

const CardAtom: React.FC<CardAtomProps> = (props) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	let RootBox = new StyleBuilder(AtomicDiv)
		.withBorderRadius(props.style)
		.withBackground(props.style)
		.withPadding(props.style)
		.withShadow(props.style)
		.build();

	const TitleBox = new LayoutBuilder(AtomicDiv)
		.withJustifyContent("start")
		.withFlexDirection("row")
		.withAlignItems("center")
		.withHeight("full")
		.withWidth("full")
		.withSpace("x-2")
		.withFlex()
		.build();

	const TitleButton = new ButtonAtom().React.ghost(props.title, () => {
		setIsCollapsed(!isCollapsed);
	});

	const BodyText = new TypographyBuilder(AtomicDiv)
		.withTextColor(props.style)
		.withLabel(props.body)
		.build();

	let Icon = new LayoutBuilder(AtomicDiv)
		.withJustifyContent("center")
		.withImage(props.imageUrl)
		.withAlignItems("center")
		.withHeight("8")
		.withWidth("8")
		.withFlex()
		.build();

	Icon = new StyleBuilder(Icon)
		.withBorderRadius(props.style)
		.withBackground("calm")
		.build();

	return (
		<>
			<RootBox>
				<TitleBox>
					<Icon />
					<TitleButton />
				</TitleBox>
				{isCollapsed ? null : <BodyText />}
			</RootBox>
		</>
	);
};

export default CardAtom;
