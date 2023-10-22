//path: src\modules\Composer\Internal\presets\ghostButton.tsx

import { ComponentBuilder } from "../components/ComponentBuilder";
import { Button as ButtonAtom } from "../atoms/button";

export const GhostButton = new ComponentBuilder("ButtonPreset", ButtonAtom)
    .withStyle("text-night-title")
    .withStyle("hover:text-aqua")
    .withStyle("font-bold")
    .withStyle("text-sm")
    .withStyle("w-full")
    .build();
