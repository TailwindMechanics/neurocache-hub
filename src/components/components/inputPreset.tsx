//path: src\components\components\inputPreset.tsx

import ComponentBuilder from "./ComponentBuilder";
import InputAtom from "../atoms/inputAtom";

const InputPreset = new ComponentBuilder(InputAtom)
	.withStyle("focus:border-aqua-light")
	.withStyle("border-night-light")
	.withStyle("text-aqua-light")
	.withStyle("bg-night-black")
	.withStyle("text-center")
	.withStyle("outline-none")
	.withStyle("ring-none")
	.withStyle("border")
	.withStyle("py-0.5")
	.withStyle("w-full")
	.withStyle("h-full")
	.withStyle("px-1")
	.build();

export default InputPreset;
