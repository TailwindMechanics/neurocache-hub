//path: src\components\react_flow\core\reactFlowCanvas.tsx

"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { NodeFlowProvider } from "@src/hooks/nodeFlowContext";
import customNodeTypes from "@src/data/customNodeTypes";
import StyleReactFlowLogo from "./styleReactFlowLogo";
import testGraphData from "@data/testGraph.json";
import SpacebarCapture from "./spacebarCapture";
import { NodeData } from "@src/types/nodeData";
import colors from "@data/colors";
import "reactflow/dist/style.css";
import ReactFlow, {
	BackgroundVariant,
	applyEdgeChanges,
	applyNodeChanges,
	useReactFlow,
	Background,
	Connection,
	EdgeChange,
	NodeChange,
	NodeTypes,
	addEdge,
	Node,
	Edge,
} from "reactflow";

const newTypes: NodeTypes = {};
const newNodes: Node[] = [];
const newEdges: Edge[] = [];

const ReactFlowCanvas: React.FC = () => {
	StyleReactFlowLogo();
	const [nodes, setNodes] = useState(newNodes);
	const [edges, setEdges] = useState(newEdges);
	const [types, setTypes] = useState(newTypes);
	const reactFlowInstance = useReactFlow();

	const mouseCoordsRef = useRef({ x: 0, y: 0 });
	const handleMouseMove = (event: React.MouseEvent) => {
		const reactFlowCoords = reactFlowInstance.project({
			x: event.clientX,
			y: event.clientY,
		});
		mouseCoordsRef.current = reactFlowCoords;
	};

	const handleMouseDown = (event: React.MouseEvent) => {
		const isSpawner = (event.target as HTMLElement).closest(
			'[data-type="spawner-node"]',
		);
		if (isSpawner) return;

		removeSpawnerNode();
	};

	useEffect(() => {
		const newNodes: Node[] = testGraphData.nodes.map(
			(config: NodeData) => ({
				id: config.nodeId,
				type: config.nodeType,
				data: { ...config },
				position: config.nodePosition,
			}),
		);

		const newTypes: NodeTypes = Object.assign({}, customNodeTypes);

		setNodes(newNodes);
		setTypes(newTypes);
	}, []);

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

	const spawnSpawnerNode = () => {
		let newPos = { ...mouseCoordsRef.current };
		newPos.x -= 20;
		newPos.y -= 20;
		const spawnerNode: Node = {
			id: "spawner_node_1",
			type: "spawner",
			position: newPos,
			data: {},
		};

		setNodes((prevNodes) => [...prevNodes, spawnerNode]);
	};

	const removeSpawnerNode = () => {
		setNodes((prevNodes) =>
			prevNodes.filter((node) => node.id !== "spawner_node_1"),
		);
	};

	return (
		<div className="h-screen w-screen bg-gradient-to-tr from-rose-dark from-0% via-rose via-20% to-rose-light to-90%">
			<NodeFlowProvider edges={edges}>
				<ReactFlow
					onMouseMove={handleMouseMove}
					onMouseDownCapture={handleMouseDown}
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
				<SpacebarCapture onSpacebarPress={spawnSpawnerNode} />
			</NodeFlowProvider>
		</div>
	);
};

export default ReactFlowCanvas;
