//path: src\components\react_flow\core\colouredLine.tsx

import React, { FC } from "react";

interface ColouredLineProps {
	fromX: number;
	fromY: number;
	toX: number;
	toY: number;
	sourceHandleRotation?: number;
	targetHandleRotation?: number | null;
	distance?: number;
}

const ColouredLine: FC<ColouredLineProps> = ({
	fromX,
	fromY,
	toX,
	toY,
	sourceHandleRotation = 0,
	targetHandleRotation = null,
	distance = 50,
}) => {
	const length = Math.sqrt(
		Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2),
	);
	const dynamicDistance = Math.min(length / 2, distance);

	const sourceHandleRotationInRadians =
		(sourceHandleRotation * Math.PI) / 180;

	const controlPoint1X =
		fromX + Math.cos(sourceHandleRotationInRadians) * dynamicDistance;
	const controlPoint1Y =
		fromY + Math.sin(sourceHandleRotationInRadians) * dynamicDistance;

	const deltaX = toX - fromX;
	const deltaY = toY - fromY;
	const angleToPointBack = Math.atan2(deltaY, deltaX) + Math.PI;

	let controlPoint2X, controlPoint2Y;
	if (targetHandleRotation !== null) {
		const targetHandleRotationInRadians =
			(targetHandleRotation * Math.PI) / 180;
		controlPoint2X =
			toX + Math.cos(targetHandleRotationInRadians) * dynamicDistance;
		controlPoint2Y =
			toY + Math.sin(targetHandleRotationInRadians) * dynamicDistance;
	} else {
		controlPoint2X = toX + Math.cos(angleToPointBack) * dynamicDistance;
		controlPoint2Y = toY + Math.sin(angleToPointBack) * dynamicDistance;
	}

	return (
		<g className={`stroke-night-dark`}>
			<circle cx={fromX} cy={fromY} r="5" fill="red" />
			<circle cx={toX} cy={toY} r="5" fill="blue" />

			<path
				fill="none"
				stroke="stroke-night"
				strokeWidth="4"
				strokeLinecap="round"
				strokeDasharray="1 3"
				d={`M${fromX},${fromY} C ${controlPoint1X},${controlPoint1Y} ${controlPoint2X},${controlPoint2Y} ${toX},${toY}`}
			/>
		</g>
	);
};

export default ColouredLine;
