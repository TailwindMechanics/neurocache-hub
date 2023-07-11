//path: src\components\chat\autoResizingTextArea.tsx

import { useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';


interface AutoResizingTextareaProps {
    value: string;
    onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const AutoResizingTextarea = ({ value, onChange, onKeyDown }: AutoResizingTextareaProps) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const resizeTextarea = () => {
        if (textAreaRef.current) {
            let scrollHeight = textAreaRef.current.scrollHeight;
            textAreaRef.current.style.height = 'auto';
            let lineHeight = textAreaRef.current.scrollHeight;
            if (scrollHeight < lineHeight) {
                lineHeight /= 2;
            }
            textAreaRef.current.style.height = `${lineHeight}px`;
        }
    };

    useEffect(() => {
        resizeTextarea();
    }, []);

    useEffect(() => {
        resizeTextarea();
    }, [value]);

    return (
        <textarea
            ref={textAreaRef}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onInput={resizeTextarea}
            className="placeholder-text-dark px-3 pt-1 pb-4 overflow-hidden flex-grow w-full text-text-light bg-bg rounded-lg border border-main-light resize-none focus:border-text-dark focus:outline-none focus:ring-0"
            placeholder={"Type your message here..."}
            maxLength={250}
        />
    );
};

export default AutoResizingTextarea;
