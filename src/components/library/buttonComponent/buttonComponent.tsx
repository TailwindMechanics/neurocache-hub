//path: src\components\library\buttonComponent\buttonComponent.tsx

import TypographyBuilder from "@src/components/builders/typographyBuilder/TypographyBuilder";
import BehaviourBuilder from "@src/components/builders/behaviourBuilder/BehaviourBuilder";
import StyleBuilder from "@src/components/builders/styleBuilder/StyleBuilder";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { Style } from "@src/types/declarations";
import { FC } from "react";
import React from "react";

interface ButtonComponentProps {
	category?: Style["Category"];
	label?: string;
	ariaLabel?: string;
	tooltip?: string;
	onClick: () => void;
	disabled?: boolean;
}

const ButtonComponent: FC<ButtonComponentProps> = ({
	category = "calm",
	label = "",
	ariaLabel = "",
	tooltip = "",
	onClick,
	disabled = false,
}) => {
	let Build = new StyleBuilder(AtomicDiv)
		.withBorderRadius(category)
		.withBorder(category)
		.withShadow(category)
		.withHover(category)
		.withBg(category)
		.build();

	Build = new TypographyBuilder(Build)
		.withTextAlignment(category)
		.withFontFamily(category)
		.withHoverColor(category)
		.withFontWeight(category)
		.withLineHeight(category)
		.withTextColor(category)
		.withTextSize(category)
		.build();

	Build = new BehaviourBuilder(Build)
		.withClick(onClick)
		.withPointerCursor()
		.withKeyboardNav()
		.withUnselectableText()
		.withAriaLabel(ariaLabel)
		.withDisabled(disabled)
		.withTooltip(tooltip)
		.withHover()
		.build();

	return <Build>{label}</Build>;
};

export default ButtonComponent;
