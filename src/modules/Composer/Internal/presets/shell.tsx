//path: src\modules\Composer\Internal\presets\shell.tsx

import ComponentBuilder from "../components/ComponentBuilder";
import CardAtom from "../atoms/card";

const Shell = new ComponentBuilder("ShellPreset", CardAtom)
    .withStyle("flex-col")
    .withStyle("flex")
    .withRoundedFrame()
    .withBg()
    .build();

export default Shell;
