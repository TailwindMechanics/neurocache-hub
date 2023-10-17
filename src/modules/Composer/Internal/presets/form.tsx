//path: src\modules\Composer\Internal\presets\form.tsx

import { ComponentBuilder } from "../components/ComponentBuilder";
import { Form as FormAtom } from "../atoms/form";

export const Form = new ComponentBuilder("FormPreset", FormAtom)
    .withStyle("border-none ")
    .withStyle("space-y-0.5")
    .withStyle("m-0")
    .withStyle("p-0")
    .build();
