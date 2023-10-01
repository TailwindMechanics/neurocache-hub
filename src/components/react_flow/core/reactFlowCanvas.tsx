//path: src\components\react_flow\core\reactFlowCanvas.tsx

"use client";

import customNodeTypes, { customNodeDefaults } from "@src/data/customNodeTypes";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { spawnSpawnerNode } from "../utils/spawnerNodeUtils";
import { NodeFlowProvider } from "@src/hooks/useNodeFlow";
import StyleReactFlowLogo from "./styleReactFlowLogo";
import { loadFlow, saveFlow } from "./flowSaveLoad";
import { useSession } from "@src/hooks/useSession";
import { spawnNode } from "../utils/nodeSpawner";
import ConnectionLine from "./connectionLine";
import loginNode from "../nodes/loginNode";
import EdgeLine from "./edgeLine";
import colors from "@data/colors";
import "reactflow/dist/style.css";
import ReactFlow, {
	useOnSelectionChange,
	BackgroundVariant,
	applyEdgeChanges,
	applyNodeChanges,
	NodeMouseHandler,
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
	let viewport = useViewport();
	const [edgeTypes] = useState({ custom: EdgeLine });
	const [selectedNodes, setSelectedNodes] = useState<Node[]>([]);
	const [spawnedLoginNode, setSpawnedLoginNode] = useState<Node | undefined>(
		undefined,
	);
	const [types, setTypes] = useState<NodeTypes>({});
	const [nodes, setNodes] = useState<Node[]>([]);
	const [edges, setEdges] = useState<Edge[]>([]);
	const viewportRef = useRef<Viewport>(viewport);
	const [isSaved, setIsSaved] = useState(false);
	const mouseCoordsRef = useRef({ x: 0, y: 0 });
	const [canZoom, setCanZoom] = useState(true);
	const reactFlowInstance = useReactFlow();
	const session = useSession();

	useEffect(() => {
		if (!reactFlowInstance.viewportInitialized) {
			return;
		}

		console.log(session);

		if (!session) {
			spawnLoginNode();
			setCanZoom(true);
			return;
		}

		// Restore users most recent graph
		viewport = loadFlow(flowKey, setNodes, setEdges) as Viewport;
		reactFlowInstance.setViewport(viewport);
		viewportRef.current = viewport;

		setTypes({ ...customNodeTypes });
	}, [reactFlowInstance.viewportInitialized, session]);

	useEffect(() => {
		viewportRef.current = viewport;
	}, [viewport]);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [session]);

	const spawnLoginNode = () => {
		if (spawnedLoginNode) return;

		setTypes({ login: loginNode });
		const spawnedLogin = spawnNode("login", reactFlowInstance);
		setSpawnedLoginNode(spawnedLogin);
	};

	const handleMouseMove = (event: React.MouseEvent) => {
		const reactFlowCoords = reactFlowInstance.project({
			x: event.clientX,
			y: event.clientY,
		});

		mouseCoordsRef.current = reactFlowCoords;
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

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.code === "KeyS" && (event.metaKey || event.ctrlKey)) {
			event.preventDefault();

			if (!session) return;

			saveFlow(
				reactFlowInstance,
				setNodes,
				setEdges,
				setIsSaved,
				flowKey,
				viewportRef.current,
			);
		}
	};

	const handleRightClick = (event: React.MouseEvent) => {
		event.preventDefault();
		setCanZoom(true);

		if (!session) return;

		const spawnerNode = spawnSpawnerNode(
			mouseCoordsRef.current,
			customNodeDefaults,
		);

		setNodes((prevNodes: Node[]) => [...prevNodes, spawnerNode]);
	};

	const handleNodeMouseEnter = useCallback<NodeMouseHandler>(
		(event: React.MouseEvent, node: Node) => {
			const cursorOverSelected = selectedNodes.find(
				(selectedNode) => selectedNode.id === node.id,
			);
			setCanZoom(!cursorOverSelected);
		},
		[selectedNodes],
	);

	const handleNodeMouseLeave = useCallback(() => {
		setCanZoom(true);
	}, []);

	useOnSelectionChange({
		onChange: ({ nodes, edges }) => {
			setSelectedNodes(nodes);
			setCanZoom(!nodes.length);
		},
	});

	return (
		<div className="h-screen w-screen bg-gradient-to-tr from-rose-dark from-0% via-rose via-20% to-rose-light to-90%">
			{isSaved && (
				<div className="absolute bottom-1 left-3 z-10 font-mono text-sm font-semibold text-rose-light">
					Saving...
				</div>
			)}
			<NodeFlowProvider edges={edges}>
				<ReactFlow
					// Element and Data Related Props
					nodes={nodes}
					edges={edges}
					nodeTypes={types}
					edgeTypes={edgeTypes}
					// Event Handler Props
					onConnect={onConnect}
					onContextMenu={handleRightClick}
					onEdgesChange={onEdgesChange}
					onMouseMove={handleMouseMove}
					onNodeMouseEnter={handleNodeMouseEnter}
					onNodeMouseLeave={handleNodeMouseLeave}
					onNodesChange={onNodesChange}
					// Styling and UI Props
					attributionPosition="bottom-right"
					connectionLineComponent={ConnectionLine}
					defaultEdgeOptions={{ type: "custom", zIndex: -100 }}
					// Zoom and Pan Props
					autoPanOnConnect={false}
					autoPanOnNodeDrag={false}
					connectionRadius={9}
					maxZoom={10}
					minZoom={0.2}
					preventScrolling={canZoom}
					fitView={true}
					fitViewOptions={{ padding: 1.7 }}
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
