//path: src\components\client\reactflow\utils\mapOutputIds.ts

import { PositionId } from "@src/types/nodeData";

const MapOutputIds = (
	inputs: string[],
	toMap: PositionId[],
): string[] | null => {
	const anyInputIncluded = toMap?.some((handle) => {
		return handle.type === "target" && inputs.includes(handle.id);
	});

	if (anyInputIncluded) {
		return toMap
			.filter((handle) => handle.type === "source")
			.map((handle) => handle.id);
	}

	return null;
};

export default MapOutputIds;
