//path: src\components\react_flow\utils\nodeSelectionState.tsx

import { ReactFlowInstance } from "reactflow";

const NodeSelectionState = (flow: ReactFlowInstance, id: string) => {
	const selectedElements = flow.getNodes().filter((node) => node.selected);
	const isSelected = selectedElements.some((element) => element.id === id);
	const selectedStyles = isSelected
		? "outline outline-2 outline-aqua-dark"
		: "";

	return selectedStyles;
};

export default NodeSelectionState;
