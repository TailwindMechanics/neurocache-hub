//path: src\components\components\cardShellPreset.tsx

import ComponentBuilder from "./ComponentBuilder";
import DivAtom from "../atoms/divAtom";

const CardShellPreset = new ComponentBuilder(DivAtom)
	.withStyle("flex-col")
	.withStyle("flex")
	.withRoundedFrame()
	.withShadow()
	.withBg()
	.build();

export default CardShellPreset;
