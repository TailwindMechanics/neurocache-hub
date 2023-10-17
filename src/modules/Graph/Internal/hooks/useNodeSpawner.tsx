//path: src\modules\Graph\Internal\hooks\useNodeSpawner.tsx

import { Node } from "reactflow";

import { CustomNodesRepo } from "../../External/CustomNodesRepo";
import { CustomNode, PositionId } from "../../types";
import { Uid } from "@modules/Utils";

export const useNodeSpawner = () => {
    const spawn = (
        nodeType: string,
        selected: boolean = false,
        overrideId: string | null = null,
    ) => {
        const nodeDataDefaults = CustomNodesRepo.instance.getNode(nodeType);

        if (!nodeDataDefaults) return null;

        const uid = overrideId ?? Uid();
        const handles = nodeDataDefaults.handles
            ? nodeDataDefaults.handles.map((handle, index) => {
                  return {
                      ...handle,
                      id: `handle_${index}_${handle.type}_${nodeType}_${uid}`,
                  };
              })
            : ([] as PositionId[]);

        const nodeData = {
            nodeType: nodeType,
            nodeName: nodeDataDefaults.nodeName,
            nodeId: `node_${nodeType}_${uid}`,
            body: nodeDataDefaults.body,
            handles: handles,
            nodePosition: { x: 0, y: 0 },
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

    const despawn = (removeId: string, prevNodes: Node[]): Node[] => {
        const filteredNodes = prevNodes.filter((node) => node.id !== removeId);
        return filteredNodes;
    };

    return {
        spawn,
        despawn,
    };
};
