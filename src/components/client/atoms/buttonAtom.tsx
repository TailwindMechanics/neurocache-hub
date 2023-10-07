//path: src\components\client\atoms\buttonAtom.tsx

import { motion, useAnimation } from "framer-motion";
import { AtomProps } from "@src/types/declarations";
import React, { useEffect, useRef } from "react";

const ButtonAtom: React.FC<AtomProps> = (props) => {
	const controls = useAnimation();
	const isMounted = useRef(false);

	useEffect(() => {
		isMounted.current = true;

		return () => {
			isMounted.current = false;
		};
	}, []);

	return (
		<motion.button
			onClick={props.onClick}
			className={props.className}
			animate={controls}
			whileTap={{
				scale: 0.97,
				transition: { duration: 0.15, ease: "linear" },
			}}
		>
			{props.children}
		</motion.button>
	);
};

export default ButtonAtom;
