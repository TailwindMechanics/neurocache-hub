//path: src\components\atoms\card.tsx

import TypographyBuilder from "../builders/typographyBuilder/TypographyBuilder";
import StyleBuilder from "../builders/styleBuilder/StyleBuilder";
import { Style } from "@src/types/declarations";
import React, { useState } from "react";
import ButtonAtom from "./buttonAtom";
import AtomicDiv from "./atomicDiv";
import LayoutBuilder from "../builders/layoutBuilder/LayoutBuilder";
import Image from "next/image";
import { User } from "@src/data/icons";

interface CardProps {
	style: Style["Category"];
	title: string;
	body: string;
	buttonLabel: string;
	onClick: () => void;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	let RootBox = new StyleBuilder(AtomicDiv)
		.withBorderRadius(props.style)
		.withBackground(props.style)
		.withPadding(props.style)
		.withShadow(props.style)
		.build();

	const TitleBox = new LayoutBuilder(AtomicDiv)
		.withFlex()
		.withFlexDirection("row")
		.withJustifyContent("start")
		.withAlignItems("center")
		.withSpace("x-2")
		.build();

	const TitleButton = new ButtonAtom().React.ghost(props.title, () => {
		setIsCollapsed(!isCollapsed);
	});

	const BodyText = new TypographyBuilder(AtomicDiv)
		.withLabel(props.body)
		.withTextColor(props.style)
		.build();

	const imageUrl = "/images/icons/openai.svg";
	const Icon = () => (
		<div className="flex h-8 w-8 items-center justify-center rounded-full">
			{imageUrl ? (
				<Image
					src={imageUrl}
					alt="Content"
					className="h-8 w-8 rounded-full"
					width={80}
					height={80}
				/>
			) : (
				<User />
			)}
		</div>
	);

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

export default Card;
