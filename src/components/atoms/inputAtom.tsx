//path: src\components\atoms\inputAtom.tsx

import { AtomProps } from "@src/types/declarations";
import React from "react";

const InputAtom: React.FC<AtomProps> = (props) => {
	return (
		<input
			type={props.type || "text"}
			value={props.value}
			onChange={props.onChange}
			className={props.className || ""}
		/>
	);
};

export default InputAtom;
