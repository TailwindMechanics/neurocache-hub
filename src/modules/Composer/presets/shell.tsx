//path: src\modules\Composer\presets\shell.tsx

import Components from "..";

const Shell = new Components.Builder(Components.Atoms.Card)
	.withStyle("flex-col")
	.withStyle("flex")
	.withRoundedFrame()
	.withBg()
	.build();

export default Shell;
