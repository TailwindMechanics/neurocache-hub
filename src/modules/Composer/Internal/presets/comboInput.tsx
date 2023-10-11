//path: src\modules\Composer\Internal\presets\comboInput.tsx

import { Composer } from "..";

const ComboInput = new Composer.Builder(Composer.Atoms.Input.Combo)
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

export default ComboInput;
