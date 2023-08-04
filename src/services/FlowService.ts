//path: src\services\FlowService.ts

import { useState, useCallback, ComponentType } from "react";
import { Subject } from "rxjs";
import {
	applyNodeChanges,
	applyEdgeChanges,
	Connection,
	EdgeChange,
	NodeChange,
	NodeTypes,
	NodeProps,
	addEdge,
	Node,
	Edge,
} from "reactflow";
import ButtonOutputNode from "@src/components/react_flow/nodes/buttonOutputNode";
import DisplayInputNode from "@src/components/react_flow/nodes/displayInputNode";

class FlowService {
	public readonly nodeEmitted: Subject<{ ids: string[]; payload: string }> =
		new Subject();
	private types: NodeTypes = {};
	private nodes: Node[] = [];
	private edges: Edge[] = [];

	public onNodeOutput(outputHandleId: string, payload: string) {
		console.log(">=== FlowService", outputHandleId, payload);

		const connectedEdges = this.edges.filter(
			(edge) => edge.sourceHandle === outputHandleId,
		);

		const targetIds = connectedEdges
			.map((edge) => edge.targetHandle)
			.filter((id): id is string => id !== null && id !== undefined);

		if (targetIds.length > 0) {
			this.nodeEmitted.next({ ids: targetIds, payload: payload });
		}
	}

	private constructor() {}
	private static instance: FlowService;
	public static getInstance(): FlowService {
		if (!FlowService.instance) {
			FlowService.instance = new FlowService();
		}
		return FlowService.instance;
	}

	init() {
		const outputTextDebugNode = new ButtonOutputNode({
			title: "Output On Button Click",
			body: "This node outputs the InputField text when the Button is clicked.",
			type: "output_text_debug_node",
			debugOutputId: "debug_output",
			outputHandleId: "output",
		});
		this.nodes.push(outputTextDebugNode.node());
		this.types.output_text_debug_node =
			outputTextDebugNode.build() as ComponentType<NodeProps>;

		const displayNode = new DisplayInputNode({
			title: "Display Input",
			body: "This node displays input payload it receives.",
			type: "input_display_node",
			inputHandleId: "input",
		});
		this.nodes.push(displayNode.node());
		this.types.input_display_node =
			displayNode.build() as ComponentType<NodeProps>;

		const nodes = this.nodes;
		const edges = this.edges;
		const types = this.types;

		return {
			nodes,
			edges,
			types,
		};
	}

	callbackData(newNodes: Node[], newEdges: Edge[], types: NodeTypes) {
		const [nodes, setNodes] = useState(newNodes);
		const [edges, setEdges] = useState(newEdges);

		const onNodesChange = useCallback(
			(changes: NodeChange[]) => {
				const updatedNodes = applyNodeChanges(changes, nodes);
				setNodes(updatedNodes);
				this.nodes = updatedNodes;
			},
			[nodes],
		);

		const onEdgesChange = useCallback(
			(changes: EdgeChange[]) => {
				const updatedEdges = applyEdgeChanges(changes, edges);
				setEdges(updatedEdges);
				this.edges = updatedEdges;
			},
			[edges],
		);

		const onConnect = useCallback(
			(connection: Edge | Connection) => {
				const newEdges = addEdge(connection, edges);
				setEdges(newEdges);
				this.edges = newEdges;
			},
			[edges],
		);

		return {
			nodes,
			edges,
			types,
			onNodesChange,
			onEdgesChange,
			onConnect,
		};
	}
}

const flowService = FlowService.getInstance();
export default flowService;
