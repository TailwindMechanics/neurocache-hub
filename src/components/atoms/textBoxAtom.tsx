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
		<span className={`w-${width} h-${height} ${className}`}>{value}</span>
	);
};

export default TextBoxAtom;
