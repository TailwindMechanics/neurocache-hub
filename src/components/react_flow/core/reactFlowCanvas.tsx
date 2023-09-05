//path: src\components\react_flow\core\reactFlowCanvas.tsx

"use client";

import { NodeFlowProvider } from "@src/hooks/nodeFlowContext";
import StyleReactFlowLogo from "./styleReactFlowLogo";
import React, { useCallback, useState } from "react";
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
	addEdge,
	Edge,
} from "reactflow";
import SpacebarCapture from "./spacebarCapture";

const newNodes: NodeType[] = [];
const newTypes: NodeTypes = {};
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
		<div className="h-screen w-screen bg-gradient-to-tr from-rose-dark from-0% via-rose via-20% to-rose-light to-90%">
			<NodeFlowProvider edges={edges}>
				<ReactFlow
					nodes={nodes}
					onNodesChange={onNodesChange}
					edges={edges}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					nodeTypes={types}
					elementsSelectable={false}
					defaultEdgeOptions={{
						style: {
							stroke: colors["night-light"],
							strokeWidth: 4,
							boxShadow: "5px 12px 2px #000000",
						},
					}}
				>
					<Background
						variant={BackgroundVariant.Dots}
						color={colors["rose-dark"]}
					/>
				</ReactFlow>
				<SpacebarCapture
					onSpacebarPress={function (): void {
						console.log("Spacebar pressed");
					}}
				/>
			</NodeFlowProvider>
		</div>
	);
};

export default ReactFlowCanvas;
