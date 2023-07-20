//path: src\components\atoms\atomComponent.tsx

import { AtomNode } from "@/types/declarations";
import React from "react";

const AtomComponent: AtomNode = ({ children, className, ...props }) => {
	return (
		<div className={className} {...props}>
			{children}
		</div>
	);
};

export default AtomComponent;
