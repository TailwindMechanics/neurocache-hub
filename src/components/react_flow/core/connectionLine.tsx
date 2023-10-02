//path: src\components\react_flow\core\connectionLine.tsx

import { AnimationDefinition, useAnimation } from "framer-motion";
import { ConnectionLineComponentProps } from "reactflow";
import useNodeHandle from "@src/hooks/useNodeHandle";
import ColouredLine from "../../components/colouredLine";
import React, { FC } from "react";

const ConnectionLine: FC<ConnectionLineComponentProps> = (props) => {
	if (!props.fromHandle?.id) return null;
	const fromHandle = useNodeHandle(props.fromHandle.id.toString());
	if (!fromHandle?.handleData) return null;

	const fromAngle = fromHandle.handleData.angle;
	const fromXy = fromHandle?.handleXy;

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
		<>
			<ColouredLine
				controls={controls}
				fromX={fromXy.x}
				fromY={fromXy.y}
				toX={props.toX}
				toY={props.toY}
				showTargetRing={true}
				sourceHandleRotation={fromAngle}
				className={"stroke-night-dark stroke-4 stroke-dash-1-3"}
			/>
			<ColouredLine
				controls={controls}
				fromX={fromXy.x}
				fromY={fromXy.y}
				toX={props.toX}
				toY={props.toY}
				sourceHandleRotation={fromAngle}
				className={"stroke-night-light stroke-2.25 stroke-dash-1-3"}
			/>
		</>
	);
};

export default ConnectionLine;
