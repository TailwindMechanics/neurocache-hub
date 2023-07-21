//path: src\components\library\buttonComponent\buttonComponent.tsx

import TypographyBuilder from "@/components/builders/TypographyBuilder";
import StyleBuilder from "@/components/builders/StyleBuilder";
import AtomComponent from "@/components/atoms/atomicDiv";
import { Style } from "@/types/declarations";
import { FC } from "react";
import React from "react";

interface ButtonComponentProps {
	category?: Style["Category"];
	label?: string;
	textSize?: Style["TextSize"];
}

const ButtonComponent: FC<ButtonComponentProps> = ({
	category = "calm",
	label = "",
}) => {
	let Build = new StyleBuilder(AtomComponent)
		.withStyle("bg", category)
		.withStyle("hover", category)
		.withBorder(category)
		.withBorderRadius()
		.withShadow()
		.build();

	Build = new TypographyBuilder(Build)
		.withTextSize(category)
		.withTextAlignment(category)
		.withFontFamily(category)
		.withTextColor(category)
		.withFontWeight(category)
		.withLineHeight(category)
		.build();

	return <Build>{label}</Build>;
};

export default ButtonComponent;
