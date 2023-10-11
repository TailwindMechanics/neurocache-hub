//path: src\modules\Composer\Internal\presets\button.tsx

import { Composer } from "..";

const Button = new Composer.Builder(Composer.Atoms.Button)
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
