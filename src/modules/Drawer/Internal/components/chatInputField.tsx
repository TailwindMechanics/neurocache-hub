//path: src\modules\Drawer\Internal\components\chatInputField.tsx

import React, { FC, useRef, useState } from "react";

import { Composer, TextAreaPreset } from "@modules/Composer";
import { IsNullOrEmpty } from "@modules/Utils";

interface ChatInputFieldProps {
    className?: string;
    onSubmit: (input: string) => void;
}

const TextArea = new Composer("ConciergeAgentInput", TextAreaPreset)
    .withStyle("font-semibold")
    .withStyle("leading-snug")
    .withStyle("resize-none")
    .withStyle("text-start")
    .withStyle("rounded-lg")
    .withStyle("border-2")
    .withStyle("text-xl")
    .build();

const ChatInputField: FC<ChatInputFieldProps> = React.memo((props) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [inputValue, setInputValue] = useState("");
    const [messageKey, setMessageKey] = useState(0);

    const handleInputChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey) {
            e.preventDefault();

            if (!IsNullOrEmpty(inputValue)) {
                props.onSubmit(inputValue);
                setInputValue("");
                setMessageKey(messageKey == 0 ? 1 : 0);
                setTimeout(() => {
                    textAreaRef.current?.focus();
                }, 0);
            }
        }
    };

    return (
        <TextArea
            textAreaRef={textAreaRef}
            key={messageKey}
            className={props.className}
            value={inputValue}
            onTextAreaChange={handleInputChange}
            onTextAreaKeyDown={handleKeyDown}
        />
    );
});

ChatInputField.displayName = "ChatInputField";
export { ChatInputField };
