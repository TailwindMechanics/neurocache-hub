//path: src\modules\Graph\Internal\core\reactFlowCanvas.tsx

"use client";

import React, { useEffect, useRef, useState } from "react";
import "reactflow/dist/style.css";
import ReactFlow, {
    BackgroundVariant,
    useViewport,
    Background,
    Viewport,
    Node,
    Edge,
} from "reactflow";

import { reactFlowSettingsProps } from "./reactflowConfig";
import { StyleReactFlowLogo } from "./styleReactFlowLogo";
import { NodeFlowProvider } from "../hooks/useNodeFlow";
import useMouseCoords from "../hooks/useMouseCoords";
import CustomNodesRepo from "../../External/CustomNodesRepo";
import { ConnectionLine } from "./connectionLine";
import { loadUserGraph } from "./nodeSerializer";
import Colors from "@modules/Colors/colors";
import { NodeEvents } from "./nodeEvents";
import { SaveGraph } from "./saveGraph";
import { EdgeLine } from "./edgeLine";
import useAuth from "../hooks/useAuth";

const customNodeTypes = CustomNodesRepo.instance.getNodeTypes();
const customEdgeTypes = { custom: EdgeLine };
const flow = loadUserGraph("graph");

const ReactFlowCanvas: React.FC = () => {
    StyleReactFlowLogo();
    const flowKey = "test-flow";
    let viewport = useViewport();
    const [selectedNodes, setSelectedNodes] = useState<Node[]>([]);
    const { mouseCoordsRef, handleMouseMove } = useMouseCoords();
    const [nodes, setNodes] = useState<Node[]>(flow.nodes);
    const [edges, setEdges] = useState<Edge[]>(flow.edges);
    const viewportRef = useRef<Viewport>(flow.viewport);
    const [canZoom, setCanZoom] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        viewportRef.current = viewport;
    }, [viewport]);

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
                        defaultViewport={flow.viewport}
                        connectionLineComponent={ConnectionLine}
                        nodeTypes={customNodeTypes}
                        edgeTypes={customEdgeTypes}
                        preventScrolling={canZoom}
                        fitView={!user}
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
