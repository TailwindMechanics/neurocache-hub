//path: src\components\library\buttonComponent\buttonComponent.tsx

import StyleBuilder from "@/components/builders/StyleBuilder";
import AtomComponent from "@/components/atoms/atomComponent";
import { Style } from "@/types/declarations";
import { FC } from "react";
import React from "react";

interface ButtonComponentProps {
	category?: Style["Category"];
}

// prettier-ignore
const ButtonComponent: FC<ButtonComponentProps> = ({ category = 'primary' }) => {
	const Built = new StyleBuilder(AtomComponent)
		.withStyle("bg", category)
		.withStyle("hover", category)
		.withStyle("text", category)
		.withStyle("font", category)
		.withStyle("border", category)
		.build();

	return <Built>ButtonComponent</Built>;
};

export default ButtonComponent;
