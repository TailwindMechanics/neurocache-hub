//path: src\modules\Graph\Internal\core\reactFlowCanvas.tsx

"use client";

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

import { LoginNode, UseLoggedOut, UseLoggedIn } from "@modules/Auth/client";
import { useGuestGraphReady } from "../hooks/useGuestGraphReady";
import { useUserGraphReady } from "../hooks/useUserGraphReady";
import { reactFlowSettingsProps } from "./reactflowConfig";
import { StyleReactFlowLogo } from "./styleReactFlowLogo";
import { NodeFlowProvider } from "../hooks/useNodeFlow";
import useNodeSpawner from "../hooks/useNodeSpawner";
import useMouseCoords from "../hooks/useMouseCoords";
import { ConnectionLine } from "./connectionLine";
import { loadUserGraph } from "./nodeSerializer";
import CustomNodesRepo from "./CustomNodesRepo";
import Colors from "@modules/Colors/colors";
import { NodeEvents } from "./nodeEvents";
import { SaveGraph } from "./saveGraph";
import { EdgeLine } from "./edgeLine";

const customEdgeTypes = { custom: EdgeLine };

const ReactFlowCanvas: React.FC = () => {
    const customNodeTypes = CustomNodesRepo.instance.getNodeTypes();
    StyleReactFlowLogo();
    const flowKey = "test-flow";
    let viewport = useViewport();
    const session = useSession();
    const reactFlowInstance = useReactFlow();
    const [selectedNodes, setSelectedNodes] = useState<Node[]>([]);
    const { mouseCoordsRef, handleMouseMove } = useMouseCoords();
    const [types, setTypes] = useState<NodeTypes>({});
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const viewportRef = useRef<Viewport>(viewport);
    const [canZoom, setCanZoom] = useState(true);
    const nodeSpawner = useNodeSpawner();

    useEffect(() => {
        viewportRef.current = viewport;
    }, [viewport]);

    const loadGuest = () => {
        setTypes({ login: LoginNode });
        const loginNode = nodeSpawner.spawn("login");
        if (loginNode) {
            setNodes([loginNode]);
        }
    };

    const loadUser = (user: User | undefined) => {
        if (!user) return;
        const flow = loadUserGraph("graph");
        viewport = flow.viewport;
        setNodes(flow.nodes as Node[]);
        setEdges(flow.edges as Edge[]);
        setTypes(customNodeTypes);
        reactFlowInstance.setViewport(viewport);
        viewportRef.current = viewport;
    };

    useGuestGraphReady(loadGuest);
    useUserGraphReady(loadUser);
    UseLoggedOut(loadGuest);
    UseLoggedIn(loadUser);

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
                    setSelectedNodes={setSelectedNodes}>
                    <ReactFlow
                        connectionLineComponent={ConnectionLine}
                        nodeTypes={types}
                        edgeTypes={customEdgeTypes}
                        preventScrolling={canZoom}
                        fitView={!session}
                        {...reactFlowSettingsProps}>
                        <SaveGraph
                            flowKey={flowKey}
                            viewportRef={viewportRef}
                        />
                        <Background
                            variant={BackgroundVariant.Dots}
                            color={Colors["rose-dark"]}
                        />
                    </ReactFlow>
                </NodeEvents>
            </NodeFlowProvider>
        </div>
    );
};

export default ReactFlowCanvas;
