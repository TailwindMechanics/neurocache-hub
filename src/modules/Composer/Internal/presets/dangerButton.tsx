//path: src\modules\Composer\Internal\presets\dangerButton.tsx

import { FC, useState } from "react";

import { Button as ButtonAtom } from "../atoms/button";
import { AtomProps, Composer } from "@modules/Composer";
import { IsNullOrEmpty } from "@modules/Utils";

const DangerButtonPreset = new Composer("NewAgentButton", ButtonAtom)
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

const DangerButton: FC<AtomProps> = (props) => {
    const [isConfirmStep, setIsConfirmStep] = useState(false);
    const confirmLabel = IsNullOrEmpty(props.value) ? "sure?" : props.value;

    const handleClick = () => {
        isConfirmStep ? props.onClick?.() : setIsConfirmStep(true);
        setTimeout(() => {
            setIsConfirmStep(false);
        }, 2000);
    };

    const computeClassName = () =>
        isConfirmStep
            ? "outline outline-2 -outline-offset-4 outline-dashed"
            : "";

    return (
        <DangerButtonPreset
            className={`${computeClassName()} ${props.className}`}
            onClick={handleClick}>
            {isConfirmStep ? confirmLabel : props.children}
        </DangerButtonPreset>
    );
};

export { DangerButton };
