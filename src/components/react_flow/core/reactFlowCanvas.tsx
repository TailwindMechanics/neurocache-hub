//path: src\components\react_flow\core\reactFlowCanvas.tsx

"use client";

import customNodeTypes, { customNodeDefaults } from "@src/data/customNodeTypes";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { NodeFlowProvider } from "@src/hooks/nodeFlowContext";
import StyleReactFlowLogo from "./styleReactFlowLogo";
import { NodeData } from "@src/types/nodeData";
import colors from "@data/colors";
import "reactflow/dist/style.css";
import "../../../styles/reactFlow.scss";
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

const flowKey = "test-flow";

const ReactFlowCanvas: React.FC = () => {
	StyleReactFlowLogo();
	const [types, setTypes] = useState<NodeTypes>({});
	const [nodes, setNodes] = useState<Node[]>([]);
	const [edges, setEdges] = useState<Edge[]>([]);
	const mouseCoordsRef = useRef({ x: 0, y: 0 });
	const [isSaved, setIsSaved] = useState(false);
	const reactFlowInstance = useReactFlow();
	const { setViewport } = useReactFlow();
	const isLoadedRef = useRef(false);

	useEffect(() => {
		if (!isLoadedRef.current) {
			const restoreFlow = async () => {
				const flowData = localStorage.getItem(flowKey);
				if (!flowData) return;

				const flow = JSON.parse(flowData);
				if (!flow) return;

				console.log(
					"%c>>> Loaded flow",
					"color: #a97dd1; font-weight: bold",
				);
				isLoadedRef.current = true;

				setNodes(flow.nodes || []);
				setEdges(flow.edges || []);

				const { x = 0, y = 0, zoom = 1 } = flow.viewport;
				setViewport({ x, y, zoom });
			};

			const nodeTypes = { ...customNodeTypes };
			setTypes(nodeTypes);
			restoreFlow();
		}
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
			selected: true,
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

		console.log("%c>>> Saving flow", "color: #d1be7d; font-weight: bold");

		localStorage.setItem(flowKey, flowString);
		setIsSaved(true);
		setTimeout(() => setIsSaved(false), 2000);
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

	const handleRightClick = (event: React.MouseEvent) => {
		event.preventDefault();
		spawnSpawnerNode();
	};

	return (
		<div className="h-screen w-screen bg-gradient-to-tr from-rose-dark from-0% via-rose via-20% to-rose-light to-90%">
			{isSaved && (
				<div className="absolute bottom-1 left-3 font-mono text-sm font-semibold text-rose-light">
					Saved
				</div>
			)}
			<NodeFlowProvider edges={edges}>
				<ReactFlow
					maxZoom={6}
					autoPanOnNodeDrag={false}
					onContextMenu={handleRightClick}
					onMouseMove={handleMouseMove}
					onMouseDownCapture={handleMouseDown}
					nodes={nodes}
					onNodesChange={onNodesChange}
					edges={edges}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					nodeTypes={types}
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
