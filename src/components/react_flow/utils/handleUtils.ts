//path: src\components\react_flow\utils\handleUtils.ts

import { NodeData, PositionId } from "@src/types/nodeData";
import { Edge } from "reactflow";

export const GetConnectedHandles = (edges: Edge[]) => {
	return edges
		.flatMap((edge) => [edge.sourceHandle, edge.targetHandle])
		.filter(Boolean);
};

export const GetConnectedHandle = (
	source: PositionId[],
	connected: string[],
	type: string,
) => {
	return source.find(
		(handle) => connected.includes(handle.id) && handle.type === type,
	);
};

const CreateHandle = (config: NodeData, type: string, pos: string) => {
	const inOrOut = type === "source" ? "out" : "in";
	return {
		id: `${inOrOut}_${pos}_${config.nodeId}`,
		type: type,
		position: pos,
	} as PositionId;
};

const filterHandlesByPosition = (total: PositionId[], replace: PositionId[]) =>
	total.filter(
		(totalHandle) =>
			!replace.some(
				(replaceHandle) =>
					replaceHandle.position === totalHandle.position,
			),
	);

export const UpdateHandles = (
	config: NodeData,
	total: PositionId[],
	replace: PositionId[],
) => {
	const totalFiltered = filterHandlesByPosition(total, replace);
	const newHandles = replace.map((handle) =>
		CreateHandle(config, handle.type, handle.position),
	);

	return [...totalFiltered, ...newHandles];
};

export const CreateHandles = (
	type: string,
	config: NodeData,
	keep: PositionId[] = [],
	skipOthers: boolean = false,
): PositionId[] => {
	const handles: PositionId[] = [];
	const positions = ["left", "top", "right", "bottom"];
	positions.forEach((pos, index) => {
		const keepHandle = keep.find(
			(handle) => handle.position === pos,
		) as PositionId;
		if (keepHandle) {
			handles.push(keepHandle);
		} else if (!skipOthers) {
			handles.push(CreateHandle(config, type, pos));
		}
	});

	return handles;
};
