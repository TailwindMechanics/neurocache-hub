//path: src\modules\Graph\Internal\components\spawnerNode.tsx

import { Node, NodeProps, useReactFlow } from "reactflow";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import React from "react";

import { NodeSelectionState } from "../utils/nodeSelectionState";
import { createNode } from "../utils/nodeUtils";
import { displayNodes } from "./nodePresets";
import IComposer from "@modules/Composer";
import { NodeData } from "../../types";
import IUtils from "@modules/Utils";

const Card = new IComposer.Builder(IComposer.Components.Card)
    .withData("type", "spawner-node")
    .build();
const Content = new IComposer.Builder(IComposer.Components.Content)
    .withStyle("py-0.5")
    .withStyle("px-1")
    .withRoundedButton()
    .build();

const nodeLabel = (node: NodeData) => {
    if (!node) return "";
    if (IUtils.IsNullOrEmpty(node.nodeName)) return node.nodeName;

    const label = node.nodeName.replace("Node", "").trim();
    return `${node.category}/${label}`;
};

const SpawnerNode: React.FC<NodeProps> = (props: NodeProps) => {
    const reactFlowInstance = useReactFlow();
    const [query, setQuery] = useState("");
    const nodeData = props.data as NodeData;
    const allNodes = displayNodes();
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

    const spawnNode = (node: NodeData) => {
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

    const onSelect = (node: NodeData) => {
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
                        displayValue={(node: NodeData) => nodeLabel(node)}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Content>
                        <Combobox.Options static>
                            {filteredNodes.map((node: NodeData) => (
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

export default React.memo(SpawnerNode);
