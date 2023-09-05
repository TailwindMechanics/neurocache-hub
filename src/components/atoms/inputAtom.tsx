//path: src\components\atoms\inputAtom.tsx

import React from "react";

interface InputAtomProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

const InputAtom: React.FC<InputAtomProps> = ({
	value,
	onChange,
	className,
}) => {
	return (
		<input
			type="text"
			value={value}
			onChange={onChange}
			className={className}
		/>
	);
};

export default InputAtom;
