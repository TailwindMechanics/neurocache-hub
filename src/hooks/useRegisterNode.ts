//path: src\hooks\useRegisterNode.ts

import { useFlowService } from "@contexts/FlowServiceContext";
import { useEffect } from "react";

export function useRegisterNode(nodeId: string) {
	const flowService = useFlowService();

	useEffect(() => {
		// Registration logic here. For example:
		flowService.registerNode(nodeId);

		// Cleanup logic for when the component is unmounted:
		return () => {
			flowService.unregisterNode(nodeId);
		};
	}, [flowService, nodeId]);
}
