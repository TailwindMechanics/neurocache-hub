//path: src\components\z_deprecated\chat\autoResizingTextArea.tsx

import { useRef, useEffect, ChangeEvent, KeyboardEvent } from "react";

interface AutoResizingTextareaProps {
	value: string;
	onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const AutoResizingTextarea = ({
	value,
	onChange,
	onKeyDown,
}: AutoResizingTextareaProps) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const resizeTextarea = () => {
		if (textAreaRef.current) {
			let scrollHeight =
				textAreaRef.current.scrollHeight;
			textAreaRef.current.style.height = "auto";
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
			className="w-full flex-grow resize-none overflow-hidden rounded-lg border border-main-light bg-bg px-3 pb-4 pt-1 text-text-light placeholder-text-dark focus:border-text-dark focus:outline-none focus:ring-0"
			placeholder={"Type your message here..."}
			maxLength={250}
		/>
	);
};

export default AutoResizingTextarea;
