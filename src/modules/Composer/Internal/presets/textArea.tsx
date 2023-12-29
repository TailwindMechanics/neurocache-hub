//path: src\modules\Composer\Internal\presets\textArea.tsx

import { ComponentBuilder } from "../components/ComponentBuilder";
import { TextArea as TextAreaAtom } from "../atoms/textArea";

export const TextArea = new ComponentBuilder("TextAreaPreset", TextAreaAtom)
    .withStyle("focus:border-aqua-light")
    .withStyle("placeholder:night-title")
    .withStyle("border-night-light")
    .withStyle("placeholder:italic")
    .withStyle("text-aqua-light")
    .withStyle("bg-night-black")
    .withStyle("outline-none")
    .withStyle("ring-none")
    .withStyle("border")
    .withStyle("w-full")
    .withStyle("px-1.5")
    .withStyle("py-1")
    .build();
