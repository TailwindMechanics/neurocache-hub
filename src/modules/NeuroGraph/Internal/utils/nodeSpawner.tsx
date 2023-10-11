//path: src\modules\NeuroGraph\utils\nodeSpawner.tsx

import { Node, NodeTypes } from "reactflow";

import { createNode, deselectAllNodes } from "../../External";
import Data from "@shared/data";
import Graph from "../../External";

export const spawnLoginNode = (
    nodes: Node[],
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>,
    setTypes: React.Dispatch<React.SetStateAction<NodeTypes>>,
) => {
    setTypes({ login: Graph.Nodes.Login });
    spawnNode("login", nodes, setNodes, true);
};

export const spawnNode = (
    nodeType: string,
    nodes: Node[],
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>,
    clearGraph?: boolean,
) => {
    const nodeDataDefaults = Data.NodePresets.find(
        (n) => n.nodeType === nodeType,
    );
    if (!nodeDataDefaults) return;

    const newNodeData = createNode({
        type: nodeType,
        name: nodeDataDefaults.nodeName,
        body: nodeDataDefaults.body,
        handles: nodeDataDefaults.handles,
        pos: { x: 0, y: 0 },
    });
    const newNode: Node = {
        id: newNodeData.nodeId,
        type: nodeType,
        position: newNodeData.nodePosition,
        data: { ...newNodeData },
    };

    const prevNodes = deselectAllNodes(nodes);
    let newNodes = prevNodes.filter((n) => n.id !== newNode.id) as Node[];

    newNode.selected = true;
    if (clearGraph) newNodes = [];

    newNodes.push(newNode);
    setNodes(newNodes);
};
