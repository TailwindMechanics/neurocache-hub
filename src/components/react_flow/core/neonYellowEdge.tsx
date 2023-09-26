//path: src\components\react_flow\core\neonYellowEdge.tsx

import { EdgeProps, useReactFlow } from "reactflow";
import { NodeData } from "@src/types/nodeData";
import ColouredLine from "./colouredLine";
import React, { FC } from "react";

const NeonYellowEdge: FC<EdgeProps> = (props) => {
	const { sourceX, sourceY, targetX, targetY } = props;
	const sourceHandleId = props.sourceHandleId;
	const targetHandleId = props.targetHandleId;

	const reactFlowInstance = useReactFlow();
	const allNodeDatas = reactFlowInstance
		.getNodes()
		.map((node) => node.data as NodeData);

	const sourceNodeData = allNodeDatas.find(
		(node) => node.handles?.find((handle) => handle.id === sourceHandleId),
	);
	const targetNodeData = allNodeDatas.find(
		(node) => node.handles?.find((handle) => handle.id === targetHandleId),
	);
	const sourceHandleData = sourceNodeData?.handles?.find(
		(handle) => handle.id === sourceHandleId,
	);
	const targetHandleData = targetNodeData?.handles?.find(
		(handle) => handle.id === targetHandleId,
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
