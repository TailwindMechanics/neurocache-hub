//path: src\modules\Graph\index.tsx

"use client";

import nodeSelectionState from "./Internal/components/nodeSelectionState";
import { useNodeFlow as UseNodeFlow } from "./Internal/hooks/useNodeFlow";
import customNodesRepo from "./Internal/core/CustomNodesRepo";
import reactFlowCanvas from "./Internal/core/reactFlowCanvas";
import drawHandle from "./Internal/components/drawHandle";
import guestCanvas from "./Internal/core/guestCanvas";

function init() {
    for (const key in IGraph) {
        // console.log(key);
    }
}

namespace IGraph {
    export const Init = init;
    export const Canvas = reactFlowCanvas;
    export const GuestCanvas = guestCanvas;
    export const NodeSelectionState = nodeSelectionState;
    export const useNodeFlow = UseNodeFlow;
    export const DrawHandle = drawHandle;
    export const CustomNodesRepo = customNodesRepo;
}

export default IGraph;
