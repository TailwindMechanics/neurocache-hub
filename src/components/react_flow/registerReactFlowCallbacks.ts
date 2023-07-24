//path: src\components\react_flow\registerReactFlowCallbacks.ts

import { useState, useCallback } from "react";
import "reactflow/dist/style.css";
import data from "./nodesData";
import {
	applyNodeChanges,
	applyEdgeChanges,
	addEdge,
	NodeChange,
	EdgeChange,
	Connection,
	Edge,
} from "reactflow";

const RegisterReactFlowCallbacks = () => {
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

	return {
		nodes,
		edges,
		onNodesChange,
		onEdgesChange,
		onConnect,
	};
};

export default RegisterReactFlowCallbacks;
