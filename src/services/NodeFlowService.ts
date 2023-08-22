//path: src\services\NodeFlowService.ts

import nodeSpawnService from "./NodeSpawnService";
import { Subject } from "rxjs";

class NodeFlowService {
	private static instance: NodeFlowService;
	private constructor() {}

	public static getInstance(): NodeFlowService {
		if (!NodeFlowService.instance) {
			NodeFlowService.instance = new NodeFlowService();
		}
		return NodeFlowService.instance;
	}

	public readonly nodeEmitted: Subject<{ ids: string[]; payload: string }> =
		new Subject();

	public onNodeOutput(outputHandleId: string, payload: string) {
		console.log(">=== NodeIOService", outputHandleId, payload);

		const edges = nodeSpawnService.getEdges();

		const connectedEdges = edges.filter(
			(edge) => edge.sourceHandle === outputHandleId,
		);

		const targetIds = connectedEdges
			.map((edge) => edge.targetHandle)
			.filter((id): id is string => id !== null && id !== undefined);

		if (targetIds.length > 0) {
			this.nodeEmitted.next({ ids: targetIds, payload: payload });
		}
	}
}

const nodeFlowService = NodeFlowService.getInstance();
export default nodeFlowService;
