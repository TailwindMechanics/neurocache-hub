//path: src\modules\Graph\index.tsx

import { NodeSelectionState } from "./Internal/utils/nodeSelectionState";
import CustomNodesRepo from "./Internal/core/CustomNodesRepo";
import ReactFlowCanvas from "./Internal/core/reactFlowCanvas";
import { useNodeFlow } from "./Internal/hooks/useNodeFlow";
import { DrawHandle } from "./Internal/utils/drawHandle";
import GuestCanvas from "./Internal/core/guestCanvas";

interface Graph {
    Canvas: typeof ReactFlowCanvas;
    GuestCanvas: typeof GuestCanvas;
    NodeSelectionState: typeof NodeSelectionState;
    useNodeFlow: typeof useNodeFlow;
    DrawHandle: typeof DrawHandle;
    CustomNodesRepo: typeof CustomNodesRepo;
}

const IGraph: Graph = {
    Canvas: ReactFlowCanvas,
    GuestCanvas: GuestCanvas,
    NodeSelectionState: NodeSelectionState,
    useNodeFlow: useNodeFlow,
    DrawHandle: DrawHandle,
    CustomNodesRepo: CustomNodesRepo,
};

export default IGraph;
