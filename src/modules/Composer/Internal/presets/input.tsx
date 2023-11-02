//path: src\modules\Composer\Internal\presets\input.tsx

import { ComponentBuilder } from "../components/ComponentBuilder";
import { Input as InputAtom } from "../atoms/input";

export const Input = new ComponentBuilder("InputPreset", InputAtom)
    .withStyle("focus:border-aqua-light")
    .withStyle("placeholder:night-title")
    .withStyle("border-night-light")
    .withStyle("placeholder:italic")
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
