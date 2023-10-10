//path: src\modules\Composer\presets\card.tsx

import Components from "..";

const Card = new Components.Builder(Components.Shell)
	.withStyle("space-y-0.5")
	.withStyle("font-mono")
	.withStyle("text-xs")
	.withStyle("p-1")
	.build();

export default Card;
