//path: src\components\react_flow\reactFlowCanvas.tsx

import StyleReactFlowLogo from "./styleReactFlowLogo";
import React, { useState, useCallback } from "react";
import colors from "@data/colors.json";
import "reactflow/dist/style.css";
import data from "./nodesData";
import ReactFlow, {
	Background,
	applyNodeChanges,
	applyEdgeChanges,
	addEdge,
	NodeChange,
	EdgeChange,
	Connection,
	Edge,
	BackgroundVariant,
} from "reactflow";

const ReactFlowCanvas: React.FC = () => {
	StyleReactFlowLogo();

	const [nodes, setNodes] = useState(data.Nodes);
	const [edges, setEdges] = useState(data.Edges);

	const onNodesChange = useCallback(
		(changes: NodeChange[]) =>
			setNodes((nodes) => applyNodeChanges(changes, nodes)),
		[],
	);
	const onEdgesChange = useCallback(
		(changes: EdgeChange[]) =>
			setEdges((edges) => applyEdgeChanges(changes, edges)),
		[],
	);
	const onConnect = useCallback(
		(params: Edge | Connection) =>
			setEdges((edges) => addEdge(params, edges)),
		[],
	);

	return (
		<div className="h-screen w-screen bg-night">
			<ReactFlow
				nodes={nodes}
				onNodesChange={onNodesChange}
				edges={edges}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				nodeTypes={data.Types}
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
