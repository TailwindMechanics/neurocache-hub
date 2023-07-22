//path: src\components\library\buttonComponent\buttonComponent.tsx

import TypographyBuilder from "@/components/builders/TypographyBuilder";
import BehaviourBuilder from "@/components/builders/BehaviourBuilder";
import StyleBuilder from "@/components/builders/StyleBuilder";
import AtomComponent from "@/components/atoms/atomicDiv";
import { Style } from "@/types/declarations";
import { FC } from "react";
import React from "react";

interface ButtonComponentProps {
	category?: Style["Category"];
	label?: string;
	onClick: () => void;
}

const ButtonComponent: FC<ButtonComponentProps> = ({
	category = "calm",
	label = "",
	onClick,
}) => {
	let Build = new StyleBuilder(AtomComponent)
		.withBg(category)
		.withHover(category)
		.withBorderRadius(category)
		.withBorder(category)
		.withBorderRadius(category)
		.withShadow(category)
		.build();

	Build = new TypographyBuilder(Build)
		.withTextSize(category)
		.withTextAlignment(category)
		.withFontFamily(category)
		.withTextColor(category)
		.withHoverColor(category)
		.withFontWeight(category)
		.withLineHeight(category)
		.build();

	Build = new BehaviourBuilder(Build)
		.withHover()
		.withClick(onClick)
		.build();

	return <Build>{label}</Build>;
};

export default ButtonComponent;
