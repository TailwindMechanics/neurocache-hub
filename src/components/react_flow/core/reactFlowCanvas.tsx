//path: src\components\react_flow\core\reactFlowCanvas.tsx

"use client";

import { loadGuestGraph, loadUserGraph, saveFlow } from "./flowSaveLoad";
import useGraphSessionReady from "@src/hooks/useGraphSessionReady";
import React, { useEffect, useRef, useState } from "react";
import { reactFlowSettingsProps } from "./reactflowConfig";
import { NodeFlowProvider } from "@src/hooks/useNodeFlow";
import useMouseCoords from "@src/hooks/useMouseCoords";
import StyleReactFlowLogo from "./styleReactFlowLogo";
import ConnectionLine from "./connectionLine";
import EdgeLine from "./edgeLine";
import colors from "@data/colors";
import "reactflow/dist/style.css";
import ReactFlow, {
	BackgroundVariant,
	useReactFlow,
	useKeyPress,
	useViewport,
	Background,
	NodeTypes,
	Viewport,
	Node,
	Edge,
} from "reactflow";
import {
	useSupabaseClient,
	useSession,
	User,
} from "@supabase/auth-helpers-react";
import { NodeEvents } from "./nodeEvents";

const flowKey = "test-flow";
const ReactFlowCanvas: React.FC = () => {
	StyleReactFlowLogo();
	const { mouseCoordsRef, handleMouseMove } = useMouseCoords();
	const [selectedNodes, setSelectedNodes] = useState<Node[]>([]);
	const [edgeTypes] = useState({ custom: EdgeLine });
	const [types, setTypes] = useState<NodeTypes>({});
	const [nodes, setNodes] = useState<Node[]>([]);
	const [edges, setEdges] = useState<Edge[]>([]);
	const [isSaved, setIsSaved] = useState(false);
	const [canZoom, setCanZoom] = useState(true);
	const reactFlowInstance = useReactFlow();
	const supabase = useSupabaseClient();
	const session = useSession();

	let viewport = useViewport();

	const graphIsReady = useGraphSessionReady(reactFlowInstance, session);
	const cmdAndSPressed = useKeyPress(["Meta+s", "Strg+s"]);
	const viewportRef = useRef<Viewport>(viewport);

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

	useEffect(() => {
		if (!cmdAndSPressed || !session) return;

		console.log(viewport);

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
		loadGuestGraph(nodes, setNodes, setTypes);
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

	return (
		<div className="h-screen w-screen bg-gradient-to-tr from-rose-dark from-0% via-rose via-20% to-rose-light to-90%">
			{isSaved && (
				<div className="absolute bottom-1 left-3 z-10 font-mono text-sm font-semibold text-rose-light">
					Saving...
				</div>
			)}
			<NodeFlowProvider edges={edges}>
				<NodeEvents
					nodes={nodes}
					edges={edges}
					setNodes={setNodes}
					setEdges={setEdges}
					setCanZoom={setCanZoom}
					selectedNodes={selectedNodes}
					mouseCoordsRef={mouseCoordsRef}
					handleMouseMove={handleMouseMove}
					setSelectedNodes={setSelectedNodes}
				>
					<ReactFlow
						connectionLineComponent={ConnectionLine}
						nodeTypes={types}
						edgeTypes={edgeTypes}
						preventScrolling={canZoom}
						{...reactFlowSettingsProps}
					>
						<Background
							variant={BackgroundVariant.Dots}
							color={colors["rose-dark"]}
						/>
					</ReactFlow>
				</NodeEvents>
			</NodeFlowProvider>
		</div>
	);
};

export default ReactFlowCanvas;
