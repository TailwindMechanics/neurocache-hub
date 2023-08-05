//path: src\components\atoms\persistentInput.tsx

import React from "react";

const PersistentInput: React.FC<{
	value: string;
	onChange: (value: string) => void;
}> = ({ value, onChange }) => {
	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	React.useEffect(() => {
		inputRef.current?.focus();
	}, [value]);

	return (
		<input
			ref={inputRef}
			type="text"
			className="w-full rounded border border-gray-300"
			value={value}
			placeholder="Enter payload"
			onChange={handleChange}
		/>
	);
};

export default PersistentInput;
