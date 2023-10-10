//path: src\modules\Composer\colouredLine.tsx

import { AnimationControls, motion } from "framer-motion";
import React, { FC } from "react";

import Data from "@shared/data";

export interface ColouredLineProps {
	fromX: number;
	fromY: number;
	toX: number;
	toY: number;
	sourceHandleRotation?: number;
	targetHandleRotation?: number | null;
	showSourceRing?: boolean;
	showTargetRing?: boolean;
	className?: string;
	controls: AnimationControls;
}

const ColouredLine: FC<ColouredLineProps> = (props) => {
	const length = Math.sqrt(
		Math.pow(props.toX - props.fromX, 2) +
			Math.pow(props.toY - props.fromY, 2),
	);
	const dynamicDistance = Math.min(length / 2, 50);

	// Adjust the starting Y coordinate by the vertical offset
	const correctedSourceAngle = props.sourceHandleRotation
		? props.sourceHandleRotation - 90
		: -90;
	const sourceHandleRotationInRadians =
		(correctedSourceAngle * Math.PI) / 180;

	const controlPoint1X =
		props.fromX + Math.cos(sourceHandleRotationInRadians) * dynamicDistance;
	const controlPoint1Y =
		props.fromY + Math.sin(sourceHandleRotationInRadians) * dynamicDistance;

	const deltaX = props.toX - props.fromX;
	const deltaY = props.toY - props.fromY;
	const angleToPointBack = Math.atan2(deltaY, deltaX) + Math.PI;

	let controlPoint2X, controlPoint2Y;
	if (
		props.targetHandleRotation !== null &&
		props.targetHandleRotation !== undefined
	) {
		const correctedTargetAngle = props.targetHandleRotation - 90;
		const targetHandleRotationInRadians =
			(correctedTargetAngle * Math.PI) / 180;
		controlPoint2X =
			props.toX +
			Math.cos(targetHandleRotationInRadians) * dynamicDistance;
		controlPoint2Y =
			props.toY +
			Math.sin(targetHandleRotationInRadians) * dynamicDistance;
	} else {
		controlPoint2X =
			props.toX + Math.cos(angleToPointBack) * dynamicDistance;
		controlPoint2Y =
			props.toY + Math.sin(angleToPointBack) * dynamicDistance;
	}

	return (
		<g>
			{props.showSourceRing ? (
				<circle
					cx={props.fromX}
					cy={props.fromY}
					r="6"
					stroke={Data.Colors["aqua"]}
					fill="none"
				/>
			) : null}
			{props.showTargetRing ? (
				<circle
					cx={props.toX}
					cy={props.toY}
					r="6"
					stroke={Data.Colors["aqua"]}
					fill="none"
				/>
			) : null}
			<motion.path
				animate={props.controls}
				className={props.className}
				fill="none"
				strokeLinecap="round"
				d={`M${props.toX},${props.toY} C ${controlPoint2X},${controlPoint2Y} ${controlPoint1X},${controlPoint1Y} ${props.fromX},${props.fromY}`}
			/>
		</g>
	);
};

export default ColouredLine;
