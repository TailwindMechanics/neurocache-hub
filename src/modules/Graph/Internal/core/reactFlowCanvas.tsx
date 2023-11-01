//path: src\modules\Graph\Internal\core\reactFlowCanvas.tsx

"use client";

import React, { use, useEffect, useMemo, useRef, useState } from "react";
import "reactflow/dist/style.css";
import ReactFlow, {
    BackgroundVariant,
    useViewport,
    Background,
    Viewport,
    Node,
    Edge,
    useReactFlow,
} from "reactflow";

import { CustomNodesRepo } from "../../External/CustomNodesRepo";
import { ConnectionLine } from "../components/connectionLine";
import { loadGraph, loadUserGraph } from "./nodeSerializer";
import { reactFlowSettingsProps } from "./reactflowConfig";
import { StyleReactFlowLogo } from "./styleReactFlowLogo";
import { useMouseCoords } from "../hooks/useMouseCoords";
import { NodeFlowProvider } from "../hooks/useNodeFlow";
import { SaveGraph } from "../components/saveGraph";
import { EdgeLine } from "../components/edgeLine";
import { useActiveAgent } from "@modules/Agents";
import { Colors } from "@modules/Colors/colors";
import { useAuth } from "../hooks/useAuth";
import { NodeEvents } from "./nodeEvents";
import { getMostRecentAgent } from "@modules/Agents/External/Server/actions";

const customNodeTypes = CustomNodesRepo.instance.getNodeTypes();
const customEdgeTypes = { custom: EdgeLine };

const ReactFlowCanvas = React.memo(() => {
    const { setActiveAgent } = useActiveAgent();
    const memoizedNodeTypes = useMemo(() => customNodeTypes, []);
    const memoizedEdgeTypes = useMemo(() => customEdgeTypes, []);

    StyleReactFlowLogo();
    let viewport = useViewport();
    const [selectedNodes, setSelectedNodes] = useState<Node[]>([]);
    const { mouseCoordsRef, handleMouseMove } = useMouseCoords();
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const viewportRef = useRef<Viewport>(viewport);
    const [canZoom, setCanZoom] = useState(true);
    const { activeAgent } = useActiveAgent();
    const reactFlowInstance = useReactFlow();
    const { user } = useAuth();

    useEffect(() => {
        const fetchAndSetActiveAgent = async () => {
            try {
                const agent = await getMostRecentAgent();
                setActiveAgent(agent);
            } catch (error) {
                console.error("Error fetching the most recent agent: ", error);
            }
        };

        fetchAndSetActiveAgent();
    }, [setActiveAgent]);

    useEffect(() => {
        viewportRef.current = viewport;
    }, [viewport]);

    useEffect(() => {
        if (!activeAgent) return;

        const graph = loadGraph(activeAgent.graph);
        setNodes(graph.nodes);
        setEdges(graph.edges);
        reactFlowInstance.setViewport(graph.viewport);
    }, [activeAgent, reactFlowInstance]);

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
                        nodeTypes={memoizedNodeTypes}
                        edgeTypes={memoizedEdgeTypes}
                        defaultViewport={activeAgent?.graph?.viewport}
                        connectionLineComponent={ConnectionLine}
                        preventScrolling={canZoom}
                        fitView={!user}
                        {...reactFlowSettingsProps}>
                        <SaveGraph viewportRef={viewportRef} />
                        <Background
                            variant={BackgroundVariant.Dots}
                            color={Colors["rose-dark"]}
                        />
                    </ReactFlow>
                </NodeEvents>
            </NodeFlowProvider>
        </div>
    );
});

ReactFlowCanvas.displayName = "ReactFlowCanvas";
export { ReactFlowCanvas };
