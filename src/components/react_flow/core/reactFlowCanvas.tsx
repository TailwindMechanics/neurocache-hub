//path: src\components\react_flow\core\reactFlowCanvas.tsx

"use client";

import React, { ComponentType, useCallback, useState } from "react";
import { NodeFlowProvider } from "@src/hooks/nodeFlowContext";
import StyleReactFlowLogo from "./styleReactFlowLogo";
import nodeConfig from "@src/data/nodeConfig";
import colors from "@data/colors";
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
	NodeProps,
	addEdge,
	Edge,
} from "reactflow";

const newNodes: NodeType[] = nodeConfig.map((config, index) => ({
	id: index.toString(),
	type: config.node.type,
	data: { ...config },
	position: config.position,
}));

const newTypes: NodeTypes = nodeConfig.reduce((acc, config) => {
	acc[config.node.type] = config.node.component as ComponentType<NodeProps>;
	return acc;
}, {} as NodeTypes);

const newEdges: Edge[] = [];

const ReactFlowCanvas: React.FC = () => {
	StyleReactFlowLogo();

	const [nodes, setNodes] = useState(newNodes);
	const [edges, setEdges] = useState(newEdges);
	const [types] = useState(newTypes);

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
		<div className="from-rose-d to-rose-l h-screen w-screen bg-gradient-to-tr">
			<NodeFlowProvider edges={edges}>
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
						color={colors["rose-d"]}
					/>
				</ReactFlow>
			</NodeFlowProvider>
		</div>
	);
};

export default ReactFlowCanvas;
