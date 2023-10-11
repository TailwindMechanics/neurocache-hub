//path: src\modules\Composer\Internal\presets\form.tsx

import { Composer } from "..";

const Form = new Composer.Builder(Composer.Atoms.Form)
    .withStyle("border-none ")
    .withStyle("space-y-0.5")
    .withStyle("m-0")
    .withStyle("p-0")
    .build();

export default Form;
