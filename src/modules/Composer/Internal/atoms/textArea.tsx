// src\modules\Composer\Internal\atoms\textArea.tsx

import React, { FC, useCallback, useEffect } from "react";

import { AtomProps } from "../../types";

export const TextArea: FC<AtomProps> = (props) => {
    const handleInput = useCallback(() => {
        const textArea = props.textAreaRef?.current;
        if (textArea) {
            textArea.style.height = "2rem";
            textArea.style.height = `${textArea.scrollHeight}px`;
        }
    }, [props.textAreaRef]);

    useEffect(() => {
        handleInput();
    }, [handleInput]);

    return (
        <textarea
            className={`resize-none rounded scrollbar-hide focus:outline-none ${props.className}`}
            ref={props.textAreaRef}
            onInput={handleInput}
            onChange={(e) => props.onTextAreaChange?.(e)}
            onKeyDown={(e) => props.onTextAreaKeyDown?.(e)}
            value={props.value}
        />
    );
};
