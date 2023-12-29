//path: src\modules\Composer\Internal\atoms\textArea.tsx

import React, { FC, useEffect, useRef } from "react";
import { AtomProps } from "../../types";

export const TextArea: FC<AtomProps> = (props) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => handleInput(), []);

    const handleInput = () => {
        const textArea = textAreaRef.current;
        if (textArea) {
            textArea.style.height = "2rem";
            textArea.style.height = `${textArea.scrollHeight}px`;
        }
    };

    return (
        <textarea
            className={`resize-none rounded scrollbar-hide focus:outline-none ${props.className}`}
            ref={textAreaRef}
            onInput={handleInput}
        />
    );
};
