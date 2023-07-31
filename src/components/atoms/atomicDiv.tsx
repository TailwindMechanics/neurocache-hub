//path: src\components\atoms\atomicDiv.tsx

import { motion } from "framer-motion";
import React from "react";

//prettier-ignore
const AtomicDiv: React.FC<any> = ({ children, className, label = "", ...props}) => {
	return (
		<motion.div className={className} data-testid="atomic-div" {...props}>
			{label}{children}
		</motion.div>
	);
};

export default AtomicDiv;
