//path: src\app\page.tsx

"use client";

import colors from "@src/data/colors";
import { FC, useCallback } from "react";
import React from "react";
import ReactFlow, {
	BackgroundVariant,
	useEdgesState,
	useNodesState,
	Background,
	Connection,
	addEdge,
	Edge,
	Controls,
	MiniMap,
} from "reactflow";

const initialNodes = [
	{
		id: "1",
		position: { x: 100, y: 0 },
		data: { label: "God fucking dammit" },
	},
	{
		id: "2",
		position: { x: 100, y: 100 },
		data: { label: "Fuck fucking this" },
	},
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function page() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
		[setEdges],
	);

	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				fitView
			>
				<Controls />
				<MiniMap />
				<Background
					variant={BackgroundVariant.Dots}
					gap={12}
					size={1}
				/>
			</ReactFlow>
		</div>
	);
}
