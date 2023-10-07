//path: src\components\client\ui\contentPreset.tsx

import ComponentBuilder from "./ComponentBuilder";
import DivAtom from "../atoms/divAtom";

const ContentPreset = new ComponentBuilder(DivAtom)
	.withStyle("border-night-light")
	.withStyle("text-aqua-dark")
	.withStyle("bg-night-black")
	.withStyle("scrollbar-hide")
	.withStyle("font-semibold")
	.withStyle("overflow-auto")
	.withStyle("border")
	.build();

export default ContentPreset;
