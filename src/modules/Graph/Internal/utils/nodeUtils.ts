//path: src\modules\Graph\Internal\utils\nodeUtils.ts

import { Node } from "reactflow";

export const deselectAllNodes = (nodes: Node[]) => {
    return nodes.map((node) => ({
        ...node,
        selected: false,
    }));
};
