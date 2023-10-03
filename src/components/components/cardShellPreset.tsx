//path: src\components\components\cardShellPreset.tsx

import ComponentBuilder from "./ComponentBuilder";
import CardAtom from "../atoms/cardAtom";

const CardShellPreset = new ComponentBuilder(CardAtom)
	.withStyle("flex-col")
	.withStyle("flex")
	.withRoundedFrame()
	.withBg()
	.build();

export default CardShellPreset;
