//path: src\modules\Graph\Internal\core\agentGraphLoader.tsx

import React, { ReactNode, useEffect, useState } from "react";
import { Edge, EdgeTypes, Node, NodeTypes } from "reactflow";

import { useAgentStore } from "@modules/Agents/External/agentStore";
import { CustomNodesRepo } from "../../External/CustomNodesRepo";
import { useNodeSpawner } from "../hooks/useNodeSpawner";
import { loadGraph } from "./nodeSerializer";
import { NodeEvents } from "./nodeEvents";

export type AgentGraphLoaderProps = {
    handleMouseMove: (event: React.MouseEvent<Element, MouseEvent>) => void;
    mouseCoordsRef: React.MutableRefObject<{ x: number; y: number }>;
    setSelectedNodes: React.Dispatch<React.SetStateAction<Node[]>>;
    setCanZoom: React.Dispatch<React.SetStateAction<boolean>>;
    selectedNodes: Node[];
    children: ReactNode;
    nodeTypes?: NodeTypes;
    edgeTypes?: EdgeTypes;
};

export const AgentGraphLoader: React.FC<AgentGraphLoaderProps> = (props) => {
    const nodeSpawner = useNodeSpawner();
    const { activeAgent } = useAgentStore((state) => ({
        activeAgent: state.activeAgent,
    }));

    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    useEffect(() => {
        const persistentNodes = CustomNodesRepo.instance.getPersistentNodes();

        persistentNodes.forEach((persistentNode) => {
            setNodes((prevNodes) => {
                const nodeExists = prevNodes.some(
                    (node) => node.type === persistentNode.nodeType,
                );

                if (!nodeExists) {
                    const spawnedNode = nodeSpawner.spawn(
                        persistentNode.nodeType,
                    );
                    if (spawnedNode) {
                        return [...prevNodes, spawnedNode];
                    }
                }

                return prevNodes;
            });
        });
    }, []);

    useEffect(() => {
        if (activeAgent?.graph) {
            const graph = loadGraph(activeAgent.graph);
            const newAgentNodes = graph.nodes.filter(
                (node) => node.data.serializable,
            );
            setNodes((prevNodes) => {
                const filteredNodes = prevNodes.filter(
                    (node) => !node.data.serializable,
                );

                return [...filteredNodes, ...newAgentNodes];
            });
            setEdges(graph.edges);
        } else {
            setNodes((prevNodes) => {
                const filteredNodes = prevNodes.filter(
                    (node) => !node.data.serializable,
                );

                return [...filteredNodes];
            });
            setEdges([]);
        }
    }, [activeAgent?.graph]);

    return (
        <NodeEvents
            {...props}
            nodes={nodes}
            edges={edges}
            setNodes={setNodes}
            setEdges={setEdges}>
            {props.children}
        </NodeEvents>
    );
};

export default AgentGraphLoader;
