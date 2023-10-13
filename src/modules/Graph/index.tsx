//path: src\modules\Graph\index.tsx

import { Scope, createInjector } from "typed-inject";

import nodeSelectionState from "./Internal/components/nodeSelectionState";
import { useNodeFlow as UseNodeFlow } from "./Internal/hooks/useNodeFlow";
import customNodesRepo from "./Internal/core/CustomNodesRepo";
import reactFlowCanvas from "./Internal/core/reactFlowCanvas";
import drawHandle from "./Internal/components/drawHandle";
import guestCanvas from "./Internal/core/guestCanvas";

class IGraph {
    public readonly Canvas = reactFlowCanvas;
    public readonly GuestCanvas = guestCanvas;
    public readonly NodeSelectionState = nodeSelectionState;
    public readonly useNodeFlow = UseNodeFlow;
    public readonly DrawHandle = drawHandle;
    public readonly CustomNodesRepo = customNodesRepo;
}

const Injector = createInjector().provideClass(
    "IGraph",
    IGraph,
    Scope.Singleton,
);

export default Injector;
