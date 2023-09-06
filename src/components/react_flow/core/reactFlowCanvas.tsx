//path: src\components\react_flow\core\reactFlowCanvas.tsx

"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { NodeFlowProvider } from "@src/hooks/nodeFlowContext";
import customNodeTypes, { customNodeDefaults } from "@src/data/customNodeTypes";
import StyleReactFlowLogo from "./styleReactFlowLogo";
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
import { NodeData } from "@src/types/nodeData";

const flowKey = "test-flow";

const ReactFlowCanvas: React.FC = () => {
	StyleReactFlowLogo();
	const [types, setTypes] = useState<NodeTypes>({});
	const [nodes, setNodes] = useState<Node[]>([]);
	const [edges, setEdges] = useState<Edge[]>([]);
	const mouseCoordsRef = useRef({ x: 0, y: 0 });
	const reactFlowInstance = useReactFlow();
	const { setViewport } = useReactFlow();

	useEffect(() => {
		const restoreFlow = async () => {
			const flowData = localStorage.getItem(flowKey);
			if (!flowData) return;

			const flow = JSON.parse(flowData);
			if (!flow) return;

			console.log(`<<< Loaded flow`);
			console.log(flow);

			setNodes(flow.nodes || []);
			setEdges(flow.edges || []);

			const { x = 0, y = 0, zoom = 1 } = flow.viewport;
			setViewport({ x, y, zoom });
		};

		const nodeTypes = { ...customNodeTypes };
		setTypes(nodeTypes);
		restoreFlow();
	}, []);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

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
		if (!isSpawner) {
			removeSpawnerNode();
		}
	};

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
		console.log("Spawning spawner node");

		let newPos = { ...mouseCoordsRef.current };
		newPos.x -= 20;
		newPos.y -= 20;

		const nodeConfig = customNodeDefaults.find(
			(item) => item.nodeType === "spawner",
		) as NodeData;
		nodeConfig.nodePosition = newPos;

		const spawnerNode: Node = {
			id: nodeConfig.nodeId,
			type: nodeConfig.nodeType,
			position: nodeConfig.nodePosition,
			data: nodeConfig,
		};

		setNodes((prevNodes: Node[]) => [...prevNodes, spawnerNode]);
	};

	const removeSpawnerNode = () => {
		setNodes((prevNodes: Node[]) =>
			prevNodes.filter((node) => node.id !== "node_spawner_1"),
		);
	};
	const nodesRef = useRef<Node[]>([]);

	useEffect(() => {
		nodesRef.current = nodes;
	}, [nodes]);

	const saveFlow = () => {
		const nodes = reactFlowInstance.getNodes();
		if (nodes.length === 0) return;

		const edges = reactFlowInstance.getEdges();
		setNodes(nodes);
		setEdges(edges);

		const flow = reactFlowInstance.toObject();
		const flowString = JSON.stringify(flow);

		console.log(`>>> Saving flow`);
		console.log(flow);

		localStorage.setItem(flowKey, flowString);
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.code === "KeyS" && (event.metaKey || event.ctrlKey)) {
			event.preventDefault();
			saveFlow();
		} else if (event.code === "Space") {
			event.preventDefault();
			spawnSpawnerNode();
		}
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
			</NodeFlowProvider>
		</div>
	);
};

export default ReactFlowCanvas;
