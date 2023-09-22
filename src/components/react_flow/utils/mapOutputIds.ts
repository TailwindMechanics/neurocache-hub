//path: src\components\react_flow\utils\mapOutputIds.ts

import { PositionId } from "@src/types/nodeData";

export const MapOutputIds = (
	receivedIds: string[],
	outputHandles: PositionId[],
): PositionId[] | null => {
	const anyInputIncluded = outputHandles.some((handle) => {
		return handle.type === "target" && receivedIds.includes(handle.id);
	});

	if (anyInputIncluded) {
		const sourceIds = outputHandles
			.filter((handle) => handle.type === "source")
			.map((handle) => handle);

		return sourceIds;
	}

	return null;
};
