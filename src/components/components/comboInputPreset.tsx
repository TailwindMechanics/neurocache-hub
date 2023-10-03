//path: src\components\components\comboInputPreset.tsx

import ComboInputAtom from "../atoms/comboInputAtom";
import ComponentBuilder from "./ComponentBuilder";

const ComboInputPreset = new ComponentBuilder(ComboInputAtom)
	.withStyle("focus:border-aqua-light")
	.withStyle("border-night-light")
	.withStyle("text-aqua-light")
	.withStyle("bg-night-black")
	.withStyle("outline-none")
	.withStyle("font-bold")
	.withStyle("ring-none")
	.withStyle("border")
	.withStyle("py-0.5")
	.withStyle("w-full")
	.withStyle("h-full")
	.withStyle("px-1")
	.withRoundedElement()
	.build();

export default ComboInputPreset;
