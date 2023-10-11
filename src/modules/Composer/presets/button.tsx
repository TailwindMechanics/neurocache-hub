//path: src\modules\Composer\presets\button.tsx

import Components from "..";

const Button = new Components.Builder(Components.Atoms.Button)
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

export default Button;
