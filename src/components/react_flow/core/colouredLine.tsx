//path: src\components\react_flow\core\colouredLine.tsx

import React, { FC } from "react";
import colors from "@data/colors";

interface ColouredLineProps {
	fromX: number;
	fromY: number;
	toX: number;
	toY: number;
	sourceHandleRotation?: number;
	targetHandleRotation?: number | null;
	distance?: number;
	showSourceRing?: boolean;
	showTargetRing?: boolean;
}

const ColouredLine: FC<ColouredLineProps> = ({
	fromX,
	fromY,
	toX,
	toY,
	sourceHandleRotation = 0,
	targetHandleRotation = null,
	distance = 50,
	showSourceRing = false,
	showTargetRing = false,
}) => {
	const length = Math.sqrt(
		Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2),
	);
	const dynamicDistance = Math.min(length / 2, distance);

	// Adjust the starting Y coordinate by the vertical offset
	const correctedSourceAngle = sourceHandleRotation - 90;
	const sourceHandleRotationInRadians =
		(correctedSourceAngle * Math.PI) / 180;

	const controlPoint1X =
		fromX + Math.cos(sourceHandleRotationInRadians) * dynamicDistance;
	const controlPoint1Y =
		fromY + Math.sin(sourceHandleRotationInRadians) * dynamicDistance;

	const deltaX = toX - fromX;
	const deltaY = toY - fromY;
	const angleToPointBack = Math.atan2(deltaY, deltaX) + Math.PI;

	let controlPoint2X, controlPoint2Y;
	if (targetHandleRotation !== null) {
		const correctedTargetAngle = targetHandleRotation - 90;
		const targetHandleRotationInRadians =
			(correctedTargetAngle * Math.PI) / 180;
		controlPoint2X =
			toX + Math.cos(targetHandleRotationInRadians) * dynamicDistance;
		controlPoint2Y =
			toY + Math.sin(targetHandleRotationInRadians) * dynamicDistance;
	} else {
		controlPoint2X = toX + Math.cos(angleToPointBack) * dynamicDistance;
		controlPoint2Y = toY + Math.sin(angleToPointBack) * dynamicDistance;
	}

	return (
		<g className={`stroke stroke-night-dark text-night-dark`}>
			{showSourceRing ? (
				<circle
					cx={fromX}
					cy={fromY}
					r="6"
					stroke={colors["aqua"]}
					fill="none"
				/>
			) : null}
			{showTargetRing ? (
				<circle
					cx={toX}
					cy={toY}
					r="6"
					stroke={colors["aqua"]}
					fill="none"
				/>
			) : null}
			<path
				stroke="currentColor"
				fill="none"
				strokeWidth="4"
				strokeLinecap="round"
				strokeDasharray="1 3"
				d={`M${toX},${toY} C ${controlPoint2X},${controlPoint2Y} ${controlPoint1X},${controlPoint1Y} ${fromX},${fromY}`}
			/>
		</g>
	);
};

export default ColouredLine;
