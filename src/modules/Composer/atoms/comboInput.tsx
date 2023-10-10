//path: src\modules\Composer\atoms\comboInput.tsx

import { Combobox } from "@headlessui/react";
import React, { FC } from "react";

import { AtomProps } from "@shared/types";

const ComboInput: FC<AtomProps> = (props) => {
	return (
		<Combobox.Input
			type={props.type || "text"}
			value={props.value}
			onChange={props.onChange}
			className={props.className || ""}
		/>
	);
};

export default ComboInput;
