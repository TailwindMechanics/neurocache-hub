//path: src\components\atoms\buttonAtom.tsx

import { motion, useAnimation } from "framer-motion";
import { AtomProps } from "@src/types/declarations";
import React, { useEffect, useRef } from "react";
import colors from "@src/data/colors";

const ButtonAtom: React.FC<AtomProps> = (props) => {
	const controls = useAnimation();
	const isMounted = useRef(false);

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
				borderColor: colors["aqua-light"],
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
