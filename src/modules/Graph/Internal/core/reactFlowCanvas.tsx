//path: src\modules\Graph\Internal\core\reactFlowCanvas.tsx

"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "reactflow/dist/style.css";
import ReactFlow, {
    BackgroundVariant,
    useViewport,
    Background,
    Viewport,
    Node,
    Edge,
} from "reactflow";

import { SaveGraphComponent } from "../components/saveGraphComponent";
import { useAgentStore } from "@modules/Agents/External/agentStore";
import { CustomNodesRepo } from "../../External/CustomNodesRepo";
import { ConnectionLine } from "../components/connectionLine";
import { reactFlowSettingsProps } from "./reactflowConfig";
import { StyleReactFlowLogo } from "./styleReactFlowLogo";
import { useMouseCoords } from "../hooks/useMouseCoords";
import AgentGraphLoader from "./agentGraphLoader";
import { EdgeLine } from "../components/edgeLine";
import { Colors } from "@modules/Colors/colors";
import { useAuth } from "../hooks/useAuth";

const customNodeTypes = CustomNodesRepo.instance.getNodeTypes();
const customEdgeTypes = { custom: EdgeLine };

const ReactFlowCanvas = React.memo(() => {
    const memoizedNodeTypes = useMemo(() => customNodeTypes, []);
    const memoizedEdgeTypes = useMemo(() => customEdgeTypes, []);

    StyleReactFlowLogo();
    let viewport = useViewport();
    const [selectedNodes, setSelectedNodes] = useState<Node[]>([]);
    const { mouseCoordsRef, handleMouseMove } = useMouseCoords();

    const viewportRef = useRef<Viewport>(viewport);
    const [canZoom, setCanZoom] = useState(true);
    const { user } = useAuth();

    const { activeAgent } = useAgentStore((state) => ({
        activeAgent: state.activeAgent,
    }));

    useEffect(() => {
        viewportRef.current = viewport;
    }, [viewport]);

    return (
        <div className="h-screen w-screen bg-gradient-to-tr from-rose-dark from-0% via-rose via-20% to-rose-light to-90%">
            <AgentGraphLoader
                selectedNodes={selectedNodes}
                setCanZoom={setCanZoom}
                setSelectedNodes={setSelectedNodes}
                handleMouseMove={handleMouseMove}
                mouseCoordsRef={mouseCoordsRef}>
                <ReactFlow
                    nodeTypes={memoizedNodeTypes}
                    edgeTypes={memoizedEdgeTypes}
                    defaultViewport={activeAgent?.graph?.viewport}
                    connectionLineComponent={ConnectionLine}
                    preventScrolling={canZoom}
                    fitView={!user}
                    {...reactFlowSettingsProps}>
                    <SaveGraphComponent viewportRef={viewportRef} />
                    <Background
                        variant={BackgroundVariant.Dots}
                        color={Colors["rose-dark"]}
                    />
                </ReactFlow>
            </AgentGraphLoader>
        </div>
    );
});

ReactFlowCanvas.displayName = "ReactFlowCanvas";
export { ReactFlowCanvas };
