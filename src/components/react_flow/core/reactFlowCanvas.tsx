//path: src\components\react_flow\core\reactFlowCanvas.tsx

"use client";

import { removeSpawnerNode, spawnSpawnerNode } from "../utils/spawnerNodeUtils";
import customNodeTypes, { customNodeDefaults } from "@src/data/customNodeTypes";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { NodeFlowProvider } from "@src/hooks/nodeFlowContext";
import StyleReactFlowLogo from "./styleReactFlowLogo";
import { loadFlow, saveFlow } from "./flowSaveLoad";
import ConnectionLine from "./connectionLine";
import EdgeLine from "./edgeLine";
import colors from "@data/colors";
import "reactflow/dist/style.css";
import ReactFlow, {
	OnConnectStartParams,
	BackgroundVariant,
	applyEdgeChanges,
	applyNodeChanges,
	useReactFlow,
	useViewport,
	Background,
	Connection,
	EdgeChange,
	NodeChange,
	NodeTypes,
	Viewport,
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
	const [isSaved, setIsSaved] = useState(false);
	const mouseCoordsRef = useRef({ x: 0, y: 0 });
	const reactFlowInstance = useReactFlow();
	let viewport = useViewport();
	const viewportRef = useRef<Viewport>(viewport);
	const [edgeTypes, setEdgeTypes] = useState({ custom: EdgeLine });

	useEffect(() => {
		if (!reactFlowInstance.viewportInitialized) {
			return;
		}

		viewport = loadFlow(flowKey, setNodes, setEdges) as Viewport;
		reactFlowInstance.setViewport(viewport);
		viewportRef.current = viewport;

		setTypes({ ...customNodeTypes });
	}, [reactFlowInstance.viewportInitialized]);

	useEffect(() => {
		viewportRef.current = viewport;
	}, [viewport]);

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
			setNodes((prevNodes: Node[]) => removeSpawnerNode(prevNodes));
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
			const newConnection = { ...connection, type: "custom" };
			const newEdges = addEdge(newConnection, edges);
			setEdges(newEdges);
		},
		[edges],
	);

	const onConnectStart = useCallback(
		(
			event: React.MouseEvent | React.TouchEvent,
			params: OnConnectStartParams,
		) => {},
		[edges],
	);

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.code === "KeyS" && (event.metaKey || event.ctrlKey)) {
			event.preventDefault();
			saveFlow(
				reactFlowInstance,
				setNodes,
				setEdges,
				setIsSaved,
				flowKey,
				viewportRef.current,
			);
		} else if (event.code === "Space") {
			event.preventDefault();
			const spawnerNode = spawnSpawnerNode(
				mouseCoordsRef.current,
				customNodeDefaults,
			);
			setNodes((prevNodes: Node[]) => [...prevNodes, spawnerNode]);
		}
	};

	const handleRightClick = (event: React.MouseEvent) => {
		event.preventDefault();
		const spawnerNode = spawnSpawnerNode(
			mouseCoordsRef.current,
			customNodeDefaults,
		);
		setNodes((prevNodes: Node[]) => [...prevNodes, spawnerNode]);
	};

	return (
		<div className="h-screen w-screen bg-gradient-to-tr from-rose-dark from-0% via-rose via-20% to-rose-light to-90%">
			{isSaved && (
				<div className="absolute bottom-1 left-3 z-10 font-mono text-sm font-semibold text-rose-light">
					Saving...
				</div>
			)}
			<NodeFlowProvider edges={edges}>
				<ReactFlow
					connectionRadius={9}
					maxZoom={10}
					minZoom={0.2}
					autoPanOnNodeDrag={false}
					onContextMenu={handleRightClick}
					onMouseMove={handleMouseMove}
					onMouseDownCapture={handleMouseDown}
					nodes={nodes}
					onNodesChange={onNodesChange}
					edges={edges}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					autoPanOnConnect={false}
					onConnectStart={onConnectStart}
					defaultEdgeOptions={{ type: "custom", zIndex: -100 }}
					nodeTypes={types}
					edgeTypes={edgeTypes}
					attributionPosition="bottom-right"
					connectionLineComponent={ConnectionLine}
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
