//path: src\components\atoms\inputAtom.tsx

import React, { HTMLInputTypeAttribute } from "react";

interface InputAtomProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	type?: HTMLInputTypeAttribute;
}

const InputAtom: React.FC<InputAtomProps> = (props) => {
	return (
		<>
			<input
				type={props.type || "text"}
				value={props.value}
				onChange={props.onChange}
				className={props.className || ""}
			/>
		</>
	);
};

export default InputAtom;
