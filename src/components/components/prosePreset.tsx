//path: src\components\components\prosePreset.tsx

import ComponentBuilder from "./ComponentBuilder";
import DivAtom from "../atoms/divAtom";

const ProsePreset = new ComponentBuilder(DivAtom)
	.withStyle("prose-code:text-aqua-body")
	.withStyle("prose-h2:text-aqua-dark")
	.withStyle("prose-strong:text-aqua")
	.withStyle("prose-pre:scrollbar-hide")
	.withStyle("prose-pre:break-words")
	.withStyle("border-night-light")
	.withStyle("prose-h1:text-aqua")
	.withStyle("prose-h3:text-aqua")
	.withStyle("prose-h4:text-aqua")
	.withStyle("text-aqua-title")
	.withStyle("prose-pre:text-ss")
	.withStyle("prose-pre:rounded")
	.withStyle("bg-night-black")
	.withStyle("prose-code:m-0")
	.withStyle("prose-code:p-0")
	.withStyle("prose-pre:m-0")
	.withStyle("prose-pre:p-0")
	.withStyle("text-xs")
	.withStyle("border")
	.withStyle("prose")
	.withRoundedContent()
	.build();

export default ProsePreset;
