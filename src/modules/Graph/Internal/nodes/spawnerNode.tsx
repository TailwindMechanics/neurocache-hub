//path: src\modules\Graph\Internal\nodes\spawnerNode.tsx

import { NodeProps, useReactFlow } from "reactflow";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import React from "react";

import { NodeSelectionState } from "../components/nodeSelectionState";
import { deselectAllNodes } from "../utils/nodeUtils";
import CustomNodesRepo from "../core/CustomNodesRepo";
import useNodeSpawner from "../hooks/useNodeSpawner";
import IComposer from "@modules/Composer";
import { CustomNode } from "../../types";
import IUtils from "@modules/Utils";

const Card = new IComposer.Builder("SpawnerCard", IComposer.Components.Card)
    .withData("type", "spawner-node")
    .build();
const Content = new IComposer.Builder(
    "SpawnerContent",
    IComposer.Components.Content,
)
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
    const nodeSpawner = useNodeSpawner();

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

    const spawnNode = (nodeType: string) => {
        deselectAllNodes(reactFlowInstance.getNodes());
        const spawnedNode = nodeSpawner.spawn(nodeType, true);
        if (spawnedNode) {
            reactFlowInstance.addNodes(spawnedNode);
        }
    };

    const onSelect = (node: CustomNode) => {
        if (node) {
            spawnNode(node.nodeType);
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

CustomNodesRepo.instance.register(nodeData);

export { nodeData as SpawnerNodeData };
export default React.memo(SpawnerNode);
