//path: src\modules\Graph\Internal\components\spawnerNode.tsx

import { Node, NodeProps, useReactFlow } from "reactflow";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import React from "react";

import { NodeSelectionState } from "../utils/nodeSelectionState";
import CustomNodesRepo from "../core/CustomNodesRepo";
import { createNode } from "../utils/nodeUtils";
import IComposer from "@modules/Composer";
import { CustomNode } from "../../types";
import IUtils from "@modules/Utils";

const Card = new IComposer.Builder(IComposer.Components.Card)
    .withData("type", "spawner-node")
    .build();
const Content = new IComposer.Builder(IComposer.Components.Content)
    .withStyle("py-0.5")
    .withStyle("px-1")
    .withRoundedButton()
    .build();

const nodeLabel = (node: CustomNode) => {
    if (!node) return "";
    if (IUtils.IsNullOrEmpty(node.nodeName)) return node.nodeName;

    const label = node.nodeName.replace("Node", "").trim();
    return `${node.category}/${label}`;
};

const SpawnerNode: React.FC<NodeProps> = (props: NodeProps) => {
    const [query, setQuery] = useState("");
    const reactFlowInstance = useReactFlow();
    const allNodes = CustomNodesRepo.instance.getUnhiddenNodes();

    const thisNode = reactFlowInstance?.getNode(nodeData.nodeId);
    const filteredNodes =
        query === ""
            ? allNodes
            : allNodes.filter((node) =>
                  nodeLabel(node)
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, "")),
              );

    const handleEnterPress = () => {
        if (filteredNodes.length > 0) {
            const selectedNode = filteredNodes[0];
            onSelect(selectedNode);
        }
    };

    IUtils.useKeyPress("Enter", handleEnterPress);
    IUtils.useKeyPress("Return", handleEnterPress);

    const deselectAll = (nodes: Node[]) => {
        return nodes.map((node) => ({
            ...node,
            selected: false,
        }));
    };

    const spawnNode = (node: CustomNode) => {
        const spawnedNode: Node = {
            id: node.nodeId,
            type: node.nodeType,
            position: thisNode?.position || nodeData.nodePosition,
            data: { ...node },
        };

        const prevNodes = deselectAll(reactFlowInstance.getNodes());
        let newNodes = prevNodes.filter(
            (n) => n.id !== nodeData.nodeId,
        ) as Node[];

        spawnedNode.selected = true;
        newNodes.push(spawnedNode);
        reactFlowInstance.setNodes(newNodes);
    };

    const onSelect = (node: CustomNode) => {
        if (node) {
            const newNode = createNode({
                type: node.nodeType,
                name: node.nodeName,
                body: node.body,
                handles: node.handles,
                pos: { x: 0, y: 0 },
            });
            spawnNode(newNode);
        }
    };

    return (
        <>
            <Card className={NodeSelectionState(props.id)}>
                <Combobox>
                    <IComposer.Components.Input.Combo
                        placeholder="..."
                        autoFocus
                        displayValue={(node: CustomNode) => nodeLabel(node)}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Content>
                        <Combobox.Options static>
                            {filteredNodes.map((node: CustomNode) => (
                                <Combobox.Option
                                    key={node.nodeName}
                                    className={"hover:text-aqua-body"}
                                    value={node.nodeName}
                                    onClick={() => {
                                        onSelect(node);
                                    }}>
                                    {`${node.category}/${node.nodeName}`}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Content>
                </Combobox>
            </Card>
        </>
    );
};

const nodeData = {
    nodeType: "spawner",
    nodeName: "Spawner",
    category: "Hidden",
    nodeId: "node_spawner_1",
    body: "This node spawns other nodes.",
    handles: [],
    nodePosition: { x: 200, y: 0 },
    nodeComponent: SpawnerNode,
} as CustomNode;

CustomNodesRepo.instance.addNode(nodeData);

export { nodeData as SpawnerNodeData };
export default React.memo(SpawnerNode);
