//path: src\components\atoms\divAtom.tsx

import { AtomProps } from "@src/types/declarations";
import { motion } from "framer-motion";
import React from "react";

const DivAtom: React.FC<AtomProps> = (props) => {
	return (
		<>
			<motion.div
				className={props.className}
				data-testid="div-atom"
				{...props}
			>
				{props.label}
				{props.children}
			</motion.div>
		</>
	);
};

export default DivAtom;
