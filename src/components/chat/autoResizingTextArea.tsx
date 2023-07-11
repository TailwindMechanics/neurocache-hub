import { useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';


interface AutoResizingTextareaProps {
    value: string;
    onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
}

const AutoResizingTextarea = ({ value, onChange, onKeyDown, placeholder }: AutoResizingTextareaProps) => {
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
            className="overflow-hidden flex-grow w-full text-text-dark bg-bg rounded-lg border border-main-light resize-none text-2xl focus:outline-none focus:ring-0"
            placeholder={placeholder}
            maxLength={250}
        />
    );
};

export default AutoResizingTextarea;
