//path: src\modules\Composer\Internal\presets\status.tsx

import { ComponentBuilder } from "../components/ComponentBuilder";
import { Div as DivAtom } from "../atoms/div";
import { useEffect, useState } from "react";

const Display = new ComponentBuilder("StatusPreset", DivAtom)
    .withStyle("text-night-title")
    .withStyle("leading-none")
    .withStyle("text-center")
    .withStyle("text-ss")
    .withStyle("px-2")
    .withRoundedElement()
    .build();

interface StatusProps {
    newStatus: string;
}

export const Status = (props: StatusProps) => {
    const [statusText, setStatusText] = useState(props.newStatus);

    useEffect(() => {
        setStatusText(props.newStatus);
        resetStatusText();
    }, [props.newStatus]);

    const resetStatusText = () => {
        setTimeout(() => {
            setStatusText("");
        }, 6000);
    };

    return (
        <>
            <Display>{statusText}</Display>
        </>
    );
};
