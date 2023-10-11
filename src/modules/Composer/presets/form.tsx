//path: src\modules\Composer\presets\form.tsx

import Components from "..";

const Form = new Components.Builder(Components.Atoms.Form)
    .withStyle("border-none ")
    .withStyle("space-y-0.5")
    .withStyle("m-0")
    .withStyle("p-0")
    .build();

export default Form;
