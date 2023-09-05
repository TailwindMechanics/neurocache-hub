//path: src\components\atoms\textBoxAtom.tsx

import React from "react";

interface TextBoxAtomProps {
	value: string;
	className?: string;
	width: number;
	height: number;
}

const TextBoxAtom: React.FC<TextBoxAtomProps> = ({
	value,
	className,
	width,
	height,
}) => {
	return (
		<p className={`overflow-auto w-${width} h-${height} ${className}`}>
			{value}
		</p>
	);
};

export default TextBoxAtom;
