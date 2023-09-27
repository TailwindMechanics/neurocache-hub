// path: src\components\react_flow\core\cyanConnectionLine.tsx

import { ConnectionLineComponentProps } from "reactflow";
import useNodeHandle from "@src/hooks/useNodeHandle";
import ColouredLine from "./colouredLine";
import React, { FC } from "react";

const CyanConnectionLine: FC<ConnectionLineComponentProps> = ({
	fromX,
	fromY,
	toX,
	toY,
	fromHandle,
}) => {
	const { handleData: sourceHandleData } = useNodeHandle(
		fromHandle?.id?.toString(),
	);
	const sourceAngle = sourceHandleData?.angle;

	return (
		<ColouredLine
			fromX={fromX}
			fromY={fromY}
			toX={toX}
			toY={toY}
			sourceHandleRotation={sourceAngle}
			// Pass other required props explicitly here if needed
		/>
	);
};

export default CyanConnectionLine;
