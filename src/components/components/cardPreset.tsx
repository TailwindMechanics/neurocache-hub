//path: src\components\components\cardPreset.tsx

import ComponentBuilder from "./ComponentBuilder";
import CardShellPreset from "./cardShellPreset";

const CardPreset = new ComponentBuilder(CardShellPreset)
	.withStyle("space-y-0.5")
	.withStyle("font-mono")
	.withStyle("text-xs")
	.withStyle("p-1")
	.build();

export default CardPreset;
