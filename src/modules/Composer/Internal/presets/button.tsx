//path: src\modules\Composer\Internal\presets\button.tsx

import ComponentBuilder from "../components/ComponentBuilder";
import ButtonAtom from "../atoms/button";

const Button = new ComponentBuilder("ButtonPreset", ButtonAtom)
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
