//path: src\modules\Composer\Internal\presets\comboInput.tsx

import { ComponentBuilder } from "../components/ComponentBuilder";
import { ComboInput as ComboAtom } from "../atoms/comboInput";

export const ComboInput = new ComponentBuilder("ComboPreset", ComboAtom)
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
