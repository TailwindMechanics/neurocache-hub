//path: src\components\react_flow\core\reactFlowCanvas.tsx

import React, { useCallback, useState } from "react";
import StyleReactFlowLogo from "./styleReactFlowLogo";
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
} from "reactflow";

const newNodes: NodeType[] = [];
const newTypes: NodeTypes = {};
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
