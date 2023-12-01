//path: src\modules\Graph\Internal\utils\nodeInspector.tsx

import NodeInspector from "../components/nodeInspector";
import { DrawerElement } from "@modules/Drawer/types";
import { CustomNode } from "@modules/Graph/types";

export const onDoubleClick = (
    nodeData: CustomNode,
    openDrawer: (element: DrawerElement[]) => void,
) => {
    const EditAgentDrawer: DrawerElement[] = [
        {
            node: <NodeInspector nodeData={nodeData} />,
            panelTitle: nodeData.nodeName,
        },
    ];

    openDrawer(EditAgentDrawer);
};
