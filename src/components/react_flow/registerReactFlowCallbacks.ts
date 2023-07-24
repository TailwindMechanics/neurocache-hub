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
