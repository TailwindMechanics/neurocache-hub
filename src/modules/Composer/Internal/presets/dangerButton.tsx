//path: src\modules\Composer\Internal\presets\dangerButton.tsx

import { Button as ButtonAtom } from "../atoms/button";
import { Composer } from "@modules/Composer";

const DangerButton = new Composer("NewAgentButton", ButtonAtom)
    .withStyle("hover:border-cherry-dark")
    .withStyle("hover:text-night-dark")
    .withStyle("hover:bg-cherry-dark")
    .withStyle("border-cherry-dark")
    .withStyle("text-cherry-dark")
    .withStyle("bg-night")
    .withStyle("font-bold")
    .withStyle("text-sm")
    .withStyle("border")
    .withStyle("w-full")
    .build();

export { DangerButton };
