//path: src\components\react_flow\core\reactflowConfig.ts

import { ReactFlowProps } from "reactflow";

export const reactFlowSettingsProps: Partial<ReactFlowProps> = {
	attributionPosition: "bottom-right",
	defaultEdgeOptions: { type: "custom", zIndex: -100 },
	autoPanOnConnect: false,
	autoPanOnNodeDrag: false,
	connectionRadius: 9,
	maxZoom: 10,
	minZoom: 0.2,
	fitView: true,
	fitViewOptions: { padding: 1.7 },
};
