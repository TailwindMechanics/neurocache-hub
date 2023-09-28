//path: src\components\react_flow\core\edgeLine.tsx

import { AnimationDefinition, useAnimation } from "framer-motion";
import useNodeHandle from "@src/hooks/useNodeHandle";
import ColouredLine from "./colouredLine";
import { EdgeProps } from "reactflow";
import React, { FC } from "react";

const EdgeLine: FC<EdgeProps> = (props) => {
	if (!props.sourceHandleId || !props.targetHandleId) return null;
	const fromHandle = useNodeHandle(props.sourceHandleId);
	if (!fromHandle?.handleData) return null;

	const toHandle = useNodeHandle(props.targetHandleId);
	if (!toHandle?.handleData) return null;

	const fromAngle = fromHandle.handleData.angle;
	const fromXy = fromHandle.handleXy;

	const toAngle = toHandle.handleData.angle;
	const toXy = toHandle.handleXy;
	const controls = useAnimation();

	const animation = {
		strokeDashoffset: [0, 100],
		transition: {
			repeat: Infinity,
			repeatType: "loop",
			ease: "linear",
			duration: 10,
		},
	} as AnimationDefinition;

	const playAnimation = () => {
		controls.start(animation);
	};

	const stopAnimation = () => {
		controls.stop();
	};

	return (
		<ColouredLine
			controls={controls}
			fromX={fromXy.x}
			fromY={fromXy.y}
			toX={toXy.x}
			toY={toXy.y}
			sourceHandleRotation={fromAngle}
			targetHandleRotation={toAngle}
			className={
				props.selected
					? "stroke-aqua stroke-3 stroke-dash-1-2"
					: "stroke-night-dark stroke-4 stroke-dash-1-3"
			}
		/>
	);
};

export default EdgeLine;
