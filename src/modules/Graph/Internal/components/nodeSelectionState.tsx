//path: src\modules\Graph\Internal\components\nodeSelectionState.tsx

import { Node } from "reactflow";

export const NodeSelectionState = (id: string, nodes: Node[]) => {
    const selectedElements = nodes.filter((node) => node.selected);
    const isSelected = selectedElements.some((element) => element.id === id);
    const selectedStyles = isSelected
        ? "outline outline-1.5 outline-aqua-dark"
        : "";

    return selectedStyles;
};
