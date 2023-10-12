//path: src\modules\Composer\Internal\presets\input.tsx

import ComponentBuilder from "../components/ComponentBuilder";
import InputAtom from "../atoms/input";

const Input = new ComponentBuilder("InputPreset", InputAtom)
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
