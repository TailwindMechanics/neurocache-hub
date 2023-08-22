//path: src\components\react_flow\core\reactFlowCanvas.tsx

import StyleReactFlowLogo from "./styleReactFlowLogo";
import React, { ComponentType, useCallback, useState } from "react";
import colors from "@data/colors.json";
import "reactflow/dist/style.css";
import ReactFlow, {
	BackgroundVariant,
	applyEdgeChanges,
	applyNodeChanges,
	Node as NodeType,
	Background,
	Connection,
	EdgeChange,
	NodeChange,
	NodeTypes,
	addEdge,
	Edge,
	NodeProps,
} from "reactflow";
import nodeConfig from "@src/data/nodeConfig";

const newNodes: NodeType[] = nodeConfig.map((config, index) => ({
	id: index.toString(),
	type: config.type,
	data: { label: config.label, title: config.title, body: config.body },
	position: { x: index * 200, y: 100 },
}));

const newTypes: NodeTypes = nodeConfig.reduce((acc, config) => {
	acc[config.type] = config.component as ComponentType<NodeProps>;
	return acc;
}, {} as NodeTypes);

const newEdges: Edge[] = [];

const ReactFlowCanvas: React.FC = () => {
	StyleReactFlowLogo();

	const [nodes, setNodes] = useState(newNodes);
	const [edges, setEdges] = useState(newEdges);
	const [types, setTypes] = useState(newTypes);

	const onNodesChange = useCallback(
		(changes: NodeChange[]) => {
			const updatedNodes = applyNodeChanges(changes, nodes);
			setNodes(updatedNodes);
		},
		[nodes],
	);

	const onEdgesChange = useCallback(
		(changes: EdgeChange[]) => {
			const updatedEdges = applyEdgeChanges(changes, edges);
			setEdges(updatedEdges);
		},
		[edges],
	);

	const onConnect = useCallback(
		(connection: Edge | Connection) => {
			const newEdges = addEdge(connection, edges);
			setEdges(newEdges);
		},
		[edges],
	);

	return (
		<div className="h-screen w-screen bg-night">
			<ReactFlow
				nodes={nodes}
				onNodesChange={onNodesChange}
				edges={edges}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				nodeTypes={types}
				elementsSelectable={false}
			>
				<Background
					variant={BackgroundVariant.Dots}
					color={colors.aqua.a}
				/>
			</ReactFlow>
		</div>
	);
};

export default ReactFlowCanvas;
