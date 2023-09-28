//path: src\components\atoms\textBoxAtom.tsx

import React from "react";

interface TextBoxAtomProps {
	value: string;
	className: string;
}

const TextBoxAtom: React.FC<TextBoxAtomProps> = ({ value, className }) => {
	return <p className={className}>{value}</p>;
};

export default TextBoxAtom;
