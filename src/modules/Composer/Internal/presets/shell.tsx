//path: src\modules\Composer\Internal\presets\shell.tsx

import { Composer } from "..";

const Shell = new Composer.Builder(Composer.Atoms.Card)
    .withStyle("flex-col")
    .withStyle("flex")
    .withRoundedFrame()
    .withBg()
    .build();

export default Shell;
