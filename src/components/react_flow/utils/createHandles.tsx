//path: src\components\react_flow\utils\createHandles.tsx

import { NodeData, PositionId } from "@src/types/nodeData";

export const CreateHandle = (
	config: NodeData,
	type: string,
	pos: string,
	key: number = 0,
) => {
	const inOrOut = type === "source" ? "out" : "in";

	return {
		id: `${inOrOut}_${key}_${config.nodeId}`,
		type: type,
		position: pos,
	} as PositionId;
};

const CreateHandles = (
	type: string,
	config: NodeData,
	keep: PositionId[] = [],
	skipOthers: boolean = false,
) => {
	const handles: PositionId[] = [];
	const positions = ["left", "top", "right", "bottom"];
	positions.forEach((pos, index) => {
		const keepHandle = keep.find(
			(handle) => handle.position === pos,
		) as PositionId;
		if (keepHandle) {
			handles.push(keepHandle);
		} else if (!skipOthers) {
			handles.push(CreateHandle(config, type, pos, index));
		}
	});

	return handles;
};

export default CreateHandles;
