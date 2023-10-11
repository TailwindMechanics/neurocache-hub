//path: src\modules\Graph\Internal\utils\nodeSelectionState.tsx

import { useReactFlow } from "reactflow";

export const NodeSelectionState = (id: string) => {
    const flow = useReactFlow();
    const selectedElements = flow.getNodes().filter((node) => node.selected);
    const isSelected = selectedElements.some((element) => element.id === id);
    const selectedStyles = isSelected
        ? "outline outline-1.5 outline-aqua-dark"
        : "";

    return selectedStyles;
};
