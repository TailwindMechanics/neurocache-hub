//path: src\modules\Graph\Internal\utils\spawnerNodeUtils.ts

import { Node, XYPosition } from "reactflow";

import { SpawnerNodeData } from "../nodes/spawnerNode";

export const spawnSpawnerNode = (mouseCoords: XYPosition): Node => {
    let newPos = { ...mouseCoords };
    newPos.x -= 20;
    newPos.y -= 20;

    const nodeConfig = SpawnerNodeData;
    nodeConfig.nodePosition = newPos;
    const spawnerNode: Node = {
        id: nodeConfig.nodeId,
        type: nodeConfig.nodeType,
        position: nodeConfig.nodePosition,
        data: nodeConfig,
        selected: false,
    };

    return spawnerNode;
};

export const removeSpawnerNode = (prevNodes: Node[]): Node[] => {
    const filteredNodes = prevNodes.filter(
        (node) => node.id !== "node_spawner_1",
    );
    return filteredNodes;
};
