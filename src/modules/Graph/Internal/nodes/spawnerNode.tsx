//path: src\modules\Graph\Internal\nodes\spawnerNode.tsx

"use client";

import { NodeProps, useReactFlow } from "reactflow";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import React from "react";

import { NodeSelectionState } from "../components/nodeSelectionState";
import { CustomNodesRepo } from "../../External/CustomNodesRepo";
import { removeSpawnerNode } from "../utils/spawnerNodeUtils";
import { IsNullOrEmpty, UseKeyPress } from "@modules/Utils";
import { useNodeSpawner } from "../hooks/useNodeSpawner";
import { deselectAllNodes } from "../utils/nodeUtils";
import { CustomNode } from "../../types";
import {
    ContentPreset,
    ComboPreset,
    CardPreset,
    Composer,
} from "@modules/Composer";

const Card = new Composer("SpawnerCard", CardPreset)
    .withData("type", "spawner-node")
    .build();
const Content = new Composer("SpawnerContent", ContentPreset)
    .withStyle("py-0.5")
    .withStyle("px-1")
    .withRoundedButton()
    .build();

const nodeLabel = (node: CustomNode) => {
    if (!node) return "";
    if (IsNullOrEmpty(node.nodeName)) return node.nodeName;

    const label = node.nodeName.replace("Node", "").trim();
    return `${node.category}/${label}`;
};

const SpawnerNode = React.memo((props: NodeProps) => {
    const [query, setQuery] = useState("");
    const reactFlowInstance = useReactFlow();
    const spawnableNodeTypes = CustomNodesRepo.instance.getUnhiddenNodes();
    const nodeSpawner = useNodeSpawner();
    const allNodes = useReactFlow().getNodes();

    const filteredNodes =
        query === ""
            ? spawnableNodeTypes
            : spawnableNodeTypes.filter((node) =>
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

    UseKeyPress("Enter", handleEnterPress);
    UseKeyPress("Return", handleEnterPress);

    const spawnNode = (nodeType: string) => {
        deselectAllNodes(reactFlowInstance.getNodes());
        const spawnedNode = nodeSpawner.spawn(nodeType, true);
        if (!spawnedNode) return;

        spawnedNode.position = { x: props.xPos, y: props.yPos };
        const nodes = reactFlowInstance.getNodes();
        const filteredNodes = removeSpawnerNode(nodes);
        reactFlowInstance.setNodes([...filteredNodes, spawnedNode]);
    };

    const onSelect = (node: CustomNode) => {
        if (node) {
            spawnNode(node.nodeType);
        }
    };

    return (
        <>
            <Card className={NodeSelectionState(props.id, allNodes)}>
                <Combobox>
                    <ComboPreset
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
});

const reflect_nodeData = {
    nodeType: "spawner",
    nodeName: "Spawner",
    category: "Hidden",
    nodeId: "node_spawner_1",
    body: "This node spawns other nodes.",
    handles: [],
    nodePosition: { x: 200, y: 0 },
    nodeComponent: SpawnerNode,
} as CustomNode;

export { reflect_nodeData as SpawnerNodeData };

SpawnerNode.displayName = "SpawnerNode";
export { SpawnerNode };
