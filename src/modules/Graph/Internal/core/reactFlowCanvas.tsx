//path: src\modules\Graph\Internal\core\reactFlowCanvas.tsx

"use client";

import ReactFlow, { BackgroundVariant, Background, Node } from "reactflow";
import React, { useMemo, useState } from "react";
import "reactflow/dist/style.css";

import { SaveGraphComponent } from "../components/saveGraphComponent";
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
    StyleReactFlowLogo();
    const memoizedNodeTypes = useMemo(() => customNodeTypes, []);
    const memoizedEdgeTypes = useMemo(() => customEdgeTypes, []);
    const [selectedNodes, setSelectedNodes] = useState<Node[]>([]);
    const { mouseCoordsRef, handleMouseMove } = useMouseCoords();
    const [canZoom, setCanZoom] = useState(true);
    const { user } = useAuth();

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
                    defaultViewport={{ x: 440, y: 100, zoom: 3 }}
                    connectionLineComponent={ConnectionLine}
                    preventScrolling={canZoom}
                    fitView={false}
                    {...reactFlowSettingsProps}>
                    <SaveGraphComponent />
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
