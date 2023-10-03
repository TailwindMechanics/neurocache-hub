//path: src\components\atoms\comboInputAtom.tsx

import { AtomProps } from "@src/types/declarations";
import { Combobox } from "@headlessui/react";
import React from "react";

const ComboInputAtom: React.FC<AtomProps> = (props) => {
	return (
		<Combobox.Input
			type={props.type || "text"}
			value={props.value}
			onChange={props.onChange}
			className={props.className || ""}
		/>
	);
};

export default ComboInputAtom;
