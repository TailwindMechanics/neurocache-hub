//path: src\components\client\reactflow\core\reactFlowCanvas.tsx

import { useGuestGraphReady } from "@src/hooks/useGuestGraphReady";
import { useUserGraphReady } from "@src/hooks/useUserGraphReady";
import { useSession, User } from "@supabase/auth-helpers-react";
import { loadGuestGraph, loadUserGraph } from "./flowSaveLoad";
import React, { useEffect, useRef, useState } from "react";
import { reactFlowSettingsProps } from "./reactflowConfig";
import { NodeFlowProvider } from "@src/hooks/useNodeFlow";
import useMouseCoords from "@src/hooks/useMouseCoords";
import StyleReactFlowLogo from "./styleReactFlowLogo";
import useLoggedOut from "@src/hooks/useLoggedOut";
import useLoggedIn from "@src/hooks/useLoggedIn";
import ConnectionLine from "./connectionLine";
import { NodeEvents } from "./nodeEvents";
import SaveGraph from "../../ui/saveGraph";
import EdgeLine from "./edgeLine";
import colors from "@data/colors";
import "reactflow/dist/style.css";
import ReactFlow, {
	BackgroundVariant,
	useReactFlow,
	useViewport,
	Background,
	NodeTypes,
	Viewport,
	Node,
	Edge,
} from "reactflow";

const ReactFlowCanvas: React.FC = () => {
	StyleReactFlowLogo();
	const flowKey = "test-flow";
	let viewport = useViewport();
	const session = useSession();
	const reactFlowInstance = useReactFlow();
	const [selectedNodes, setSelectedNodes] = useState<Node[]>([]);
	const { mouseCoordsRef, handleMouseMove } = useMouseCoords();
	const [edgeTypes] = useState({ custom: EdgeLine });
	const [types, setTypes] = useState<NodeTypes>({});
	const [nodes, setNodes] = useState<Node[]>([]);
	const [edges, setEdges] = useState<Edge[]>([]);
	const viewportRef = useRef<Viewport>(viewport);
	const [canZoom, setCanZoom] = useState(true);

	useEffect(() => {
		viewportRef.current = viewport;
	}, [viewport]);

	const loadGuest = () => {
		loadGuestGraph(nodes, setNodes, setTypes);
	};

	const loadUser = (user: User | undefined) => {
		if (!user) return;
		viewport = loadUserGraph("graph", setNodes, setEdges, setTypes);
		reactFlowInstance.setViewport(viewport);
		viewportRef.current = viewport;
	};

	useGuestGraphReady(loadGuest);
	useUserGraphReady(loadUser);
	useLoggedOut(loadGuest);
	useLoggedIn(loadUser);

	return (
		<div className="h-screen w-screen bg-gradient-to-tr from-rose-dark from-0% via-rose via-20% to-rose-light to-90%">
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
						fitView={!session}
						{...reactFlowSettingsProps}
					>
						<SaveGraph
							flowKey={flowKey}
							setNodes={setNodes}
							setEdges={setEdges}
							viewportRef={viewportRef}
						/>
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
