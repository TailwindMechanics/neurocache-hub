//path: src\modules\Composer\Internal\presets\shell.tsx

import { ComponentBuilder } from "../components/ComponentBuilder";
import { Card as CardAtom } from "../atoms/card";

export const Shell = new ComponentBuilder("ShellPreset", CardAtom)
    .withStyle("flex-col")
    .withStyle("flex")
    .withRoundedFrame()
    .withBg()
    .build();
