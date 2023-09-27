//path: src\components\react_flow\core\connectionLine.tsx

import { ConnectionLineComponentProps } from "reactflow";
import useNodeHandle from "@src/hooks/useNodeHandle";
import ColouredLine from "./colouredLine";
import React, { FC } from "react";

const ConnectionLine: FC<ConnectionLineComponentProps> = (props) => {
	if (!props.fromHandle?.id) return null;
	const fromHandle = useNodeHandle(props.fromHandle.id.toString());
	if (!fromHandle?.handleData) return null;

	const fromAngle = fromHandle.handleData.angle;
	const fromXy = fromHandle?.handleXy;

	return (
		<ColouredLine
			fromX={fromXy.x}
			fromY={fromXy.y}
			toX={props.toX}
			toY={props.toY}
			showTargetRing={true}
			sourceHandleRotation={fromAngle}
		/>
	);
};

export default ConnectionLine;
