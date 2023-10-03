//path: src\components\atoms\divAtom.tsx

import { AtomProps } from "@src/types/declarations";
import React from "react";

const DivAtom: React.FC<AtomProps> = (props) => {
	return (
		<>
			<div className={props.className} data-testid="div-atom" {...props}>
				{props.label}
				{props.children}
			</div>
		</>
	);
};

export default DivAtom;
