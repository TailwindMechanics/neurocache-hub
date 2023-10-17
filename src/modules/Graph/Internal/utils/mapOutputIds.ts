//path: src\modules\Graph\Internal\utils\mapOutputIds.ts

import { PositionId } from "../../types";

export const MapOutputIds = (
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
