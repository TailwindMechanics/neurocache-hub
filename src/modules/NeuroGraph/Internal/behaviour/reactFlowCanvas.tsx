//path: src\modules\NeuroGraph\core\reactFlowCanvas.tsx

import { useSession, User } from "@supabase/auth-helpers-react";
import React, { useEffect, useRef, useState } from "react";
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

import { Contexts } from "@client/hooks";
import Data from "@shared/data";
import Use from "@client/hooks";
import Graph from "../../External";
import {
	StyleReactFlowLogo,
	ConnectionLine,
	NodeEvents,
	SaveGraph,
	EdgeLine,
} from "../../External";

const ReactFlowCanvas: React.FC = () => {
	StyleReactFlowLogo();
	const flowKey = "test-flow";
	let viewport = useViewport();
	const session = useSession();
	const reactFlowInstance = useReactFlow();
	const [selectedNodes, setSelectedNodes] = useState<Node[]>([]);
	const { mouseCoordsRef, handleMouseMove } = Use.MouseCoords();
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
		Graph.LoadGuest(nodes, setNodes, setTypes);
	};

	const loadUser = (user: User | undefined) => {
		if (!user) return;
		viewport = Graph.LoadUser("graph", setNodes, setEdges, setTypes);
		reactFlowInstance.setViewport(viewport);
		viewportRef.current = viewport;
	};

	Use.GuestGraphReady(loadGuest);
	Use.UserGraphReady(loadUser);
	Use.LoggedOut(loadGuest);
	Use.LoggedIn(loadUser);

	return (
		<div className="h-screen w-screen bg-gradient-to-tr from-rose-dark from-0% via-rose via-20% to-rose-light to-90%">
			<Contexts.NodeFlowProvider edges={edges}>
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
						{...Graph.Config}
					>
						<SaveGraph
							flowKey={flowKey}
							setNodes={setNodes}
							setEdges={setEdges}
							viewportRef={viewportRef}
						/>
						<Background
							variant={BackgroundVariant.Dots}
							color={Data.Colors["rose-dark"]}
						/>
					</ReactFlow>
				</NodeEvents>
			</Contexts.NodeFlowProvider>
		</div>
	);
};

export default ReactFlowCanvas;
