//path: src\components\library\buttons\primaryButton.tsx

import StyleBuilder from "@/components/builders/StyleBuilder";
import AtomComponent from "@/components/atoms/atomComponent";
import { FC } from "react";
import React from "react";

interface ButtonComponentProps {}

const PrimaryButton: FC<ButtonComponentProps> = ({}) => {
	const StyledBox = new StyleBuilder(AtomComponent)
		.withStyle("bgPrimary")
		.withStyle("hoverPrimary")
		.withStyle("textWhite")
		.withStyle("fontBold")
		.withStyle("borderGhost")
		.build();

	return <StyledBox> Test </StyledBox>;
};

export default PrimaryButton;
