//path: src\components\atoms\buttonAtom.tsx

import React from "react";

interface ButtonAtomProps {
	onClick: () => void;
	children: React.ReactNode;
	className?: string;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({
	onClick,
	children,
	className,
}) => {
	return (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	);
};

export default ButtonAtom;
