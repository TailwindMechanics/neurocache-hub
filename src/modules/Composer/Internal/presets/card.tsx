//path: src\modules\Composer\Internal\presets\card.tsx

import { ComponentBuilder } from "../components/ComponentBuilder";
import { Shell } from "./shell";

export const Card = new ComponentBuilder("CardPreset", Shell)
    .withStyle("space-y-0.5")
    .withStyle("font-mono")
    .withStyle("text-xs")
    .withStyle("p-1")
    .build();
