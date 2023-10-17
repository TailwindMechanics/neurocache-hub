//path: src\modules\Composer\Internal\presets\button.tsx

import { ComponentBuilder } from "../components/ComponentBuilder";
import { Button as ButtonAtom } from "../atoms/button";

export const Button = new ComponentBuilder("ButtonPreset", ButtonAtom)
    .withStyle("border-night-light")
    .withStyle("hover:border-aqua")
    .withStyle("text-night-title")
    .withStyle("hover:text-aqua")
    .withStyle("text-aqua")
    .withStyle("bg-night")
    .withStyle("font-bold")
    .withStyle("text-sm")
    .withStyle("border")
    .withStyle("w-full")
    .build();
