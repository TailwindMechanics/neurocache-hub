//path: src\modules\Composer\presets\input.tsx

import Components from "..";

const Input = new Components.Builder(Components.Atoms.Input.Default)
	.withStyle("focus:border-aqua-light")
	.withStyle("border-night-light")
	.withStyle("text-aqua-light")
	.withStyle("bg-night-black")
	.withStyle("outline-none")
	.withStyle("text-center")
	.withStyle("ring-none")
	.withStyle("border")
	.withStyle("py-0.5")
	.withStyle("w-full")
	.withStyle("h-full")
	.withStyle("px-1")
	.build();

export default Input;
