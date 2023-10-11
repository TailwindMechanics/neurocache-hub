//path: src\modules\Composer\presets\content.tsx

import Components from "..";

const Content = new Components.Builder(Components.Atoms.Div)
    .withStyle("border-night-light")
    .withStyle("text-aqua-dark")
    .withStyle("bg-night-black")
    .withStyle("scrollbar-hide")
    .withStyle("font-semibold")
    .withStyle("overflow-auto")
    .withStyle("border")
    .build();

export default Content;
