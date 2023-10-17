//path: src\modules\Composer\Internal\presets\prose.tsx

import { ComponentBuilder } from "../components/ComponentBuilder";
import { Div as DivAtom } from "../atoms/div";

export const Prose = new ComponentBuilder("ProsePreset", DivAtom)
    .withStyle("prose-code:text-aqua-body")
    .withStyle("prose-h2:text-aqua-dark")
    .withStyle("prose-strong:text-aqua")
    .withStyle("prose-pre:scrollbar-hide")
    .withStyle("prose-pre:break-words")
    .withStyle("border-night-light")
    .withStyle("prose-h1:text-aqua")
    .withStyle("prose-h3:text-aqua")
    .withStyle("prose-h4:text-aqua")
    .withStyle("text-aqua-title")
    .withStyle("prose-pre:text-ss")
    .withStyle("prose-pre:rounded")
    .withStyle("bg-night-black")
    .withStyle("prose-code:m-0")
    .withStyle("prose-code:p-0")
    .withStyle("prose-pre:m-0")
    .withStyle("prose-pre:p-0")
    .withStyle("text-xs")
    .withStyle("border")
    .withStyle("prose")
    .withRoundedContent()
    .build();
