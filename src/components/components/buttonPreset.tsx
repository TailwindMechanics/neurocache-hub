//path: src\components\components\buttonPreset.tsx

import ComponentBuilder from "./ComponentBuilder";
import ButtonAtom from "../atoms/buttonAtom";

const ButtonPreset = new ComponentBuilder(ButtonAtom)
	.withStyle("border-night-light")
	.withStyle("text-night-title")
	.withStyle("text-aqua")
	.withStyle("bg-night")
	.withStyle("font-bold")
	.withStyle("text-sm")
	.withStyle("border")
	.withStyle("w-full")
	.build();

export default ButtonPreset;
