//path: src\components\react_flow\core\neonYellowEdge.tsx

import useNodeHandle from "@src/hooks/useNodeHandle";
import ColouredLine from "./colouredLine";
import { EdgeProps } from "reactflow";
import React, { FC } from "react";

const NeonYellowEdge: FC<EdgeProps> = (props) => {
	const { sourceX, sourceY, targetX, targetY } = props;
	const { handleData: sourceHandleData } = useNodeHandle(
		props.sourceHandleId?.toString(),
	);
	const { handleData: targetHandleData } = useNodeHandle(
		props.targetHandleId?.toString(),
	);

	const sourceAngle = sourceHandleData?.angle;
	const targetAngle = targetHandleData?.angle;

	return (
		<ColouredLine
			fromX={sourceX}
			fromY={sourceY}
			toX={targetX}
			toY={targetY}
			sourceHandleRotation={sourceAngle}
			targetHandleRotation={targetAngle}
		/>
	);
};

export default NeonYellowEdge;
