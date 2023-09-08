//path: src\utils\reactFlowHelper.ts

import { useReactFlow } from "reactflow";

export class ReactFlowHelper {
	reactFlowInstance = useReactFlow();

	constructor() {
		this.reactFlowInstance = useReactFlow();
	}

	getFlowInstance = () => {
		return this.reactFlowInstance;
	};

	updateSelectedState = (id: string) => {
		const selectedElements = this.reactFlowInstance
			.getNodes()
			.filter((node) => node.selected);
		const isSelected = selectedElements.some((el) => el.id === id);
		const selectedStyles = isSelected
			? "outline outline-2 outline-aqua-dark"
			: "";
		return selectedStyles;
	};
}
