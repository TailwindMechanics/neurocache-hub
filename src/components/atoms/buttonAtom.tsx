import { motion, useAnimation } from "framer-motion";
import colors from "@src/data/colors";
import React, { useEffect, useRef } from "react";

interface ButtonAtomProps {
	children: React.ReactNode;
	onClick: () => void;
	className?: string;
}

const ButtonAtom: React.FC<ButtonAtomProps> = (props) => {
	const controls = useAnimation();
	const isMounted = useRef(true);

	useEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, []);

	const onHoverStart = () => {
		if (isMounted.current) {
			controls.start({
				color: colors["aqua-title"],
				borderColor: colors["aqua-title"],
			});
		}
	};

	const onHoverEnd = () => {
		if (isMounted.current) {
			controls.start({
				color: colors["night-title"],
				borderColor: colors["night-light"],
			});
		}
	};

	return (
		<motion.button
			onClick={props.onClick}
			className={props.className}
			animate={controls}
			whileTap={{
				scale: 0.97,
				transition: { duration: 0.15, ease: "linear" },
			}}
			onHoverStart={onHoverStart}
			onHoverEnd={onHoverEnd}
		>
			{props.children}
		</motion.button>
	);
};

export default ButtonAtom;
