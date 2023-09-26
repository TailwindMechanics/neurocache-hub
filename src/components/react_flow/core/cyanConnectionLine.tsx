//path: src\components\react_flow\core\cyanConnectionLine.tsx

import { ConnectionLineComponentProps, useReactFlow } from "reactflow";
import { NodeData } from "@src/types/nodeData";
import ColouredLine from "./colouredLine";
import React, { FC } from "react";

const CyanConnectionLine: FC<ConnectionLineComponentProps> = (props) => {
	const sourceHandleId = props.fromHandle?.id;

	const reactFlowInstance = useReactFlow();
	const allNodeDatas = reactFlowInstance
		.getNodes()
		.map((node) => node.data as NodeData);

	const sourceNodeData = allNodeDatas.find(
		(node) => node.handles?.find((handle) => handle.id === sourceHandleId),
	);
	const sourceHandeData = sourceNodeData?.handles?.find(
		(handle) => handle.id === sourceHandleId,
	);
	const sourceAngle = sourceHandeData?.angle;

	return <ColouredLine {...props} sourceHandleRotation={sourceAngle} />;
};

export default CyanConnectionLine;
