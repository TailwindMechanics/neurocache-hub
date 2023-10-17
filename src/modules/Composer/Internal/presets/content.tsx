//path: src\modules\Composer\Internal\presets\content.tsx

import { ComponentBuilder } from "../components/ComponentBuilder";
import { Div as DivAtom } from "../atoms/div";

export const Content = new ComponentBuilder("ContentPreset", DivAtom)
    .withStyle("border-night-light")
    .withStyle("text-aqua-dark")
    .withStyle("bg-night-black")
    .withStyle("scrollbar-hide")
    .withStyle("font-semibold")
    .withStyle("overflow-auto")
    .withStyle("border")
    .build();
