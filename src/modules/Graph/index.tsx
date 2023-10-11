//path: src\modules\Graph\index.tsx

import { NodeSelectionState } from "./Internal/utils/nodeSelectionState";
import ReactFlowCanvas from "./Internal/behaviour/reactFlowCanvas";
import GuestCanvas from "./Internal/behaviour/guestCanvas";
import { useNodeFlow } from "./Internal/hooks/useNodeFlow";
import { DrawHandle } from "./Internal/utils/drawHandle";

interface Graph {
    Canvas: typeof ReactFlowCanvas;
    GuestCanvas: typeof GuestCanvas;
    NodeSelectionState: typeof NodeSelectionState;
    useNodeFlow: typeof useNodeFlow;
    DrawHandle: typeof DrawHandle;
}

const IGraph: Graph = {
    Canvas: ReactFlowCanvas,
    GuestCanvas: GuestCanvas,
    NodeSelectionState: NodeSelectionState,
    useNodeFlow: useNodeFlow,
    DrawHandle: DrawHandle,
};

export default IGraph;
