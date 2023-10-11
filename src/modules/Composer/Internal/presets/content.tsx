//path: src\modules\Composer\Internal\presets\content.tsx

import { Composer } from "..";

const Content = new Composer.Builder(Composer.Atoms.Div)
    .withStyle("border-night-light")
    .withStyle("text-aqua-dark")
    .withStyle("bg-night-black")
    .withStyle("scrollbar-hide")
    .withStyle("font-semibold")
    .withStyle("overflow-auto")
    .withStyle("border")
    .build();

export default Content;
