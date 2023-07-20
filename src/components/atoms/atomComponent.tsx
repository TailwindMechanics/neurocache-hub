//path: src\components\atoms\atomComponent.tsx

import { AtomNode, AtomProps } from "@/types/declarations";
import React from "react";

const AtomComponent: AtomNode = ({ children, className }: AtomProps) => {
	return <div className={className}>{children}</div>;
};

export default AtomComponent;
