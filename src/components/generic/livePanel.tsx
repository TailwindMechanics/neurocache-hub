//path: src\components\generic\livePanel.tsx

"use client";

import { motion } from "framer-motion";
import React from "react";

interface LivePanelProps {
	children?: React.ReactNode;
	tailwind?: string;
	bgAlpha?: { min: number; max: number };
}

export const LivePanel: React.FC<LivePanelProps> = ({
	children,
	tailwind,
	bgAlpha = { min: 0.5, max: 1 },
}) => {
	return (
		<>
			<motion.section
				className={`flex-grow ${tailwind}`}
				initial={{ opacity: bgAlpha.min }}
				whileHover={{ opacity: bgAlpha.max }}
				transition={{ duration: 0.5 }}
			>
				<div
					className={`flex-grow ${tailwind}`}
				>
					{children}
				</div>
			</motion.section>
		</>
	);
};
