//path: src\components\atoms\atomicDiv.tsx

import { AtomNode } from "@src/types/declarations";
import React from "react";

// prettier-ignore
const AtomicDiv: AtomNode = ({ children, className, ...props }) => {
	return (
		<div className={className} data-testid="atomic-div" {...props}>
			{children}
		</div>
	);
};

export default AtomicDiv;
