//path: src\components\react_flow\core\reactFlowCanvas.tsx

"use client";

import { loadGuestGraph, loadUserGraph, saveFlow } from "./flowSaveLoad";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useGraphSessionReady from "@src/hooks/useGraphSessionReady";
import { customNodeDefaults } from "@src/data/customNodeTypes";
import { spawnSpawnerNode } from "../utils/spawnerNodeUtils";
import { reactFlowSettingsProps } from "./reactflowConfig";
import useMousePosition from "@src/hooks/useMousePosition";
import { NodeFlowProvider } from "@src/hooks/useNodeFlow";
import StyleReactFlowLogo from "./styleReactFlowLogo";
import ConnectionLine from "./connectionLine";
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
	useKeyPress,
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
import {
	useSupabaseClient,
	useSession,
	User,
} from "@supabase/auth-helpers-react";

const flowKey = "test-flow";
const ReactFlowCanvas: React.FC = () => {
	StyleReactFlowLogo();
	let viewport = useViewport();
	const [selectedNodes, setSelectedNodes] = useState<Node[]>([]);
	const [edgeTypes] = useState({ custom: EdgeLine });
	const [types, setTypes] = useState<NodeTypes>({});
	const [nodes, setNodes] = useState<Node[]>([]);
	const [edges, setEdges] = useState<Edge[]>([]);
	const viewportRef = useRef<Viewport>(viewport);
	const [isSaved, setIsSaved] = useState(false);
	const [canZoom, setCanZoom] = useState(true);
	const reactFlowInstance = useReactFlow();
	const supabase = useSupabaseClient();
	const session = useSession();

	const graphIsReady = useGraphSessionReady(reactFlowInstance, session);
	const { mouseCoordsRef, handleMouseMove } = useMousePosition();

	useEffect(() => {
		if (graphIsReady) {
			if (session?.user) {
				loadUser(session.user);
			} else {
				loadGuest();
			}
		}
	}, [graphIsReady]);

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, newSession) => {
				if (event === "SIGNED_IN" && !session && newSession) {
					loadUser(newSession.user);
				} else if (event === "SIGNED_OUT") {
					loadGuest();
				}
			},
		);

		return () => {
			authListener.subscription.unsubscribe();
		};
	}, [session, reactFlowInstance.viewportInitialized]);

	useEffect(() => {
		viewportRef.current = viewport;
	}, [viewport]);

	const cmdAndSPressed = useKeyPress(["Meta+s", "Strg+s"]);
	useEffect(() => {
		if (!cmdAndSPressed || !session) return;

		saveFlow(
			reactFlowInstance,
			setNodes,
			setEdges,
			setIsSaved,
			flowKey,
			viewportRef.current,
		);
	}, [cmdAndSPressed]);

	const loadGuest = () => {
		loadGuestGraph(reactFlowInstance, setTypes);
	};

	const loadUser = (currentUser: User) => {
		viewport = loadUserGraph(
			currentUser,
			flowKey,
			setNodes,
			setEdges,
			setTypes,
		);
		reactFlowInstance.setViewport(viewport);
		viewportRef.current = viewport;
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
					preventScrolling={canZoom}
					connectionLineComponent={ConnectionLine}
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
					{...reactFlowSettingsProps}
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
