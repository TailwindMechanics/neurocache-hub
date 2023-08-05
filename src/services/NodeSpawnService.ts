// path: src\services\NodeSpawnService.ts

import { ComponentType, useCallback, useState } from "react";
import { NodeConfigItem } from "@src/types/declarations";
import nodeConfig from "@src/data/nodeConfig";
import {
	applyEdgeChanges,
	Connection,
	NodeProps,
	NodeTypes,
	EdgeChange,
	addEdge,
	Node,
	Edge,
	NodeChange,
	applyNodeChanges,
} from "reactflow";

class NodeSpawnService {
	private static instance: NodeSpawnService;
	private types: NodeTypes = {};
	private nodes: Node[] = [];
	private edges: Edge[] = [];
	private constructor() {}

	public static getInstance(): NodeSpawnService {
		if (!NodeSpawnService.instance) {
			NodeSpawnService.instance = new NodeSpawnService();
		}
		return NodeSpawnService.instance;
	}

	init() {
		nodeConfig.forEach((config) => {
			this.addNode(config);
		});

		const nodes = this.nodes;
		const edges = this.edges;
		const types = this.types;

		return {
			nodes,
			edges,
			types,
		};
	}

	addNode(config: NodeConfigItem) {
		const nodeInstance = new config.component({
			title: config.title,
			body: config.body,
			type: config.type,
		});
		this.nodes.push(nodeInstance.node());
		this.types[config.type] =
			nodeInstance.build() as ComponentType<NodeProps>;
	}

	getEdges() {
		return this.edges;
	}

	callbackData(newNodes: Node[], newEdges: Edge[], newTypes: NodeTypes) {
		const [nodes, setNodes] = useState(newNodes);
		const [edges, setEdges] = useState(newEdges);
		const [types, setTypes] = useState(newTypes);

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

const nodeSpawnService = NodeSpawnService.getInstance();
export default nodeSpawnService;
