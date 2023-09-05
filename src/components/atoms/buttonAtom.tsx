//path: src\components\atoms\buttonAtom.tsx

import React from "react";
import {
	TargetAndTransition,
	AnimationControls,
	VariantLabels,
	EventInfo,
	motion,
} from "framer-motion";

interface ButtonAtomProps {
	onClick: () => void;
	children: React.ReactNode;
	className?: string;
	whileTap?: VariantLabels | TargetAndTransition;
	whileHover?: VariantLabels | TargetAndTransition;
	animate?: TargetAndTransition | VariantLabels | AnimationControls;
	onHoverStart?(event: MouseEvent, info: EventInfo): void;
	onHoverEnd?(event: MouseEvent, info: EventInfo): void;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({
	onClick,
	children,
	className,
	whileTap,
	whileHover,
	animate,
	onHoverStart,
	onHoverEnd,
}) => {
	return (
		<motion.button
			onClick={onClick}
			className={className}
			whileTap={whileTap}
			whileHover={whileHover}
			animate={animate}
			onHoverStart={onHoverStart}
			onHoverEnd={onHoverEnd}
		>
			{children}
		</motion.button>
	);
};

export default ButtonAtom;
