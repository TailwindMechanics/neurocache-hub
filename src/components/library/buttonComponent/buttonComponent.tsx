//path: src\components\library\buttonComponent\buttonComponent.tsx

import BehaviourBuilder from "@src/components/builders/behaviourBuilder/BehaviourBuilder";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { Style } from "@src/types/declarations";
import { FC } from "react";
import React from "react";
import TypographyBuilder from "@src/components/builders/typographyBuilder/TypographyBuilder";
import StyleBuilder from "@src/components/builders/styleBuilder/StyleBuilder";

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
	let Build = new StyleBuilder(AtomicDiv)
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
