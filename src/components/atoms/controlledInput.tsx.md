```tsx

//path: src\components\atoms\controlledInput.tsx

import React from "react";

const ControlledInput: React.FC<{
	value: string;
	placeholder: string;
	onChange: (value: string) => void;
}> = ({ value, placeholder, onChange }) => {
	return (
		<input
			type="text"
			className="w-full rounded border border-gray-300"
			value={value}
			placeholder={placeholder}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
};

// Memoize the ControlledInput component to prevent unnecessary re-renders
export const MemoizedControlledInput = React.memo(ControlledInput);


```