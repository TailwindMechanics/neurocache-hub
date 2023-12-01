//path: src\modules\Graph\Internal\hooks\useNodeSpawner.tsx

import { Node } from "reactflow";

import { CustomNodesRepo } from "../../External/CustomNodesRepo";
import { CustomNode, PositionId } from "../../types";

export const useNodeSpawner = () => {
    const spawn = (nodeType: string, selected: boolean = false) => {
        const customNodeData = CustomNodesRepo.instance.getNode(nodeType);

        if (!customNodeData) return null;

        const nodeId = CustomNodesRepo.instance.getNodeId(customNodeData);
        const handles = customNodeData.handles
            ? customNodeData.handles.map((handle, index) => {
                  return {
                      ...handle,
                      id: `handle_${handle.type}_${nodeId}_${index}`,
                  };
              })
            : ([] as PositionId[]);

        const nodeData = {
            serializable: customNodeData.serializable,
            category: customNodeData.category,
            nodeType: nodeType,
            nodeName: customNodeData.nodeName,
            nodeId: nodeId,
            body: customNodeData.body,
            handles: handles,
            nodePosition: customNodeData.nodePosition,
        } as CustomNode;

        const newNode: Node = {
            id: nodeData.nodeId,
            type: nodeData.nodeType,
            position: nodeData.nodePosition,
            data: { ...nodeData },
        };

        newNode.selected = selected;
        return newNode;
    };

    const despawn = (removeId: string, prevNodes: Node[]) => {
        const filtered = prevNodes.filter((n) => n.id !== removeId);
        return filtered;
    };

    return {
        spawn,
        despawn,
    };
};
