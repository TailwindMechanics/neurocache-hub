//path: src\components\atoms\atomicDiv.tsx

import { AtomNode } from "@/types/declarations";
import React from "react";

const AtomicDiv: AtomNode = ({ children, className, ...props }) => {
	return (
		<div className={className} {...props}>
			{children}
		</div>
	);
};

export default AtomicDiv;
