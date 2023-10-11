//path: src\modules\Composer\Internal\presets\input.tsx

import { Composer } from "..";

const Input = new Composer.Builder(Composer.Atoms.Input.Default)
    .withStyle("focus:border-aqua-light")
    .withStyle("border-night-light")
    .withStyle("text-aqua-light")
    .withStyle("bg-night-black")
    .withStyle("outline-none")
    .withStyle("text-center")
    .withStyle("ring-none")
    .withStyle("border")
    .withStyle("py-0.5")
    .withStyle("w-full")
    .withStyle("h-full")
    .withStyle("px-1")
    .build();

export default Input;
