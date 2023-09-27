//path: src\components\react_flow\core\neonYellowEdge.tsx

import useNodeHandle from "@src/hooks/useNodeHandle";
import ColouredLine from "./colouredLine";
import { EdgeProps } from "reactflow";
import React, { FC } from "react";

const NeonYellowEdge: FC<EdgeProps> = (props) => {
	if (!props.sourceHandleId || !props.targetHandleId) return null;
	const fromHandle = useNodeHandle(props.sourceHandleId);
	if (!fromHandle?.handleData) return null;

	const toHandle = useNodeHandle(props.targetHandleId);
	if (!toHandle?.handleData) return null;

	const fromAngle = fromHandle.handleData.angle;
	const fromXy = fromHandle.handleXy;

	const toAngle = toHandle.handleData.angle;
	const toXy = toHandle.handleXy;

	return (
		<ColouredLine
			fromX={fromXy.x}
			fromY={fromXy.y}
			toX={toXy.x}
			toY={toXy.y}
			sourceHandleRotation={fromAngle}
			targetHandleRotation={toAngle}
		/>
	);
};

export default NeonYellowEdge;
