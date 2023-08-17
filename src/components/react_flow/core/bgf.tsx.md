


```tsx
//path: src\components\react_flow\registerReactFlowCallbacks.ts

import { ReactFlowCanvasProps } from "@src/types/declarations";
import { useState, useCallback } from "react";
import "reactflow/dist/style.css";
import {
	applyNodeChanges,
	applyEdgeChanges,
	addEdge,
	NodeChange,
	EdgeChange,
	Connection,
	Edge,
} from "reactflow";

const RegisterReactFlowCallbacks = (props: ReactFlowCanvasProps) => {
	const [nodes, setNodes] = useState(props.nodes);
	const [edges, setEdges] = useState(props.edges);

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

	return {
		nodes,
		edges,
		onNodesChange,
		onEdgesChange,
		onConnect,
	};
};

export default RegisterReactFlowCallbacks;



//path: src\components\react_flow\reactFlowCanvas.tsx

import RegisterReactFlowCallbacks from "./registerReactFlowCallbacks";
import ReactFlow, { Background, BackgroundVariant } from "reactflow";
import { ReactFlowCanvasProps } from "@src/types/declarations";
import StyleReactFlowLogo from "./styleReactFlowLogo";
import colors from "@data/colors.json";
import "reactflow/dist/style.css";
import React from "react";

const ReactFlowCanvas: React.FC<ReactFlowCanvasProps> = (props) => {
	StyleReactFlowLogo();
	const callbackData = RegisterReactFlowCallbacks(props);

	return (
		<div className="h-screen w-screen bg-night">
			<ReactFlow
				nodes={callbackData.nodes}
				onNodesChange={callbackData.onNodesChange}
				edges={callbackData.edges}
				onEdgesChange={callbackData.onEdgesChange}
				onConnect={callbackData.onConnect}
				nodeTypes={props.types}
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

```