//path: src\modules\Graph\Internal\core\nodeEvents.tsx

import React, { ReactNode, FC } from "react";
import ReactFlow, {
    useOnSelectionChange,
    applyEdgeChanges,
    applyNodeChanges,
    ReactFlowProps,
    Connection,
    EdgeChange,
    NodeChange,
    addEdge,
    Node,
    Edge,
} from "reactflow";

import useNodeSpawner from "../hooks/useNodeSpawner";
import { UseKeyPress } from "@modules/Utils";

type NodeEventsProps = {
    handleMouseMove: (event: React.MouseEvent<Element, MouseEvent>) => void;
    mouseCoordsRef: React.MutableRefObject<{ x: number; y: number }>;
    setSelectedNodes: React.Dispatch<React.SetStateAction<Node[]>>;
    setCanZoom: React.Dispatch<React.SetStateAction<boolean>>;
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
    selectedNodes: Node[];
    children: ReactNode;
    edges: Edge[];
    nodes: Node[];
};

export const NodeEvents: FC<NodeEventsProps> = (props) => {
    const nodeSpawner = useNodeSpawner();

    if (!props.nodes.find((node) => node.type == "login")) {
        const loginNode = nodeSpawner.spawn("login", false, "1");
        if (loginNode) {
            props.setNodes([...props.nodes, loginNode]);
        }
    }

    useOnSelectionChange({
        onChange: ({ nodes, edges }) => {
            props.setSelectedNodes(nodes);
            props.setCanZoom(!nodes.length);
        },
    });

    const removeSpawnerNode = () => {
        const filteredNodes = nodeSpawner.despawn(
            "node_spawner_1",
            props.nodes,
        );

        props.setNodes(filteredNodes);
    };

    UseKeyPress("Escape", () => {
        removeSpawnerNode();
    });

    const eventHandlers = {
        onMouseDownCapture: (event: React.MouseEvent) => {
            const clickedSpawnerNode = (event.target as HTMLElement).closest(
                '[data-type="atom-node"]',
            );
            if (!clickedSpawnerNode) {
                removeSpawnerNode();
            }
        },

        onConnect: (connection: Edge | Connection) => {
            const newConnection = { ...connection, type: "custom" };
            const newEdges = addEdge(newConnection, props.edges);
            props.setEdges(newEdges);
        },

        onContextMenu: (event: React.MouseEvent) => {
            event.preventDefault();
            props.setCanZoom(true);

            let newPos = { ...props.mouseCoordsRef.current };
            newPos.x -= 20;
            newPos.y -= 20;
            const spawnerNode = nodeSpawner.spawn("spawner", false, "1");
            if (spawnerNode) {
                spawnerNode.position = newPos;
                props.setNodes((prevNodes: Node[]) => [
                    ...prevNodes,
                    spawnerNode,
                ]);
            }
        },

        onEdgesChange: (changes: EdgeChange[]) => {
            const updatedEdges = applyEdgeChanges(changes, props.edges);
            props.setEdges(updatedEdges);
        },

        onNodeMouseEnter: (event: React.MouseEvent, node: Node) => {
            const cursorOverSelected = props.selectedNodes.find(
                (selectedNode) => selectedNode.id === node.id,
            );
            props.setCanZoom(!cursorOverSelected);
        },

        onNodeMouseLeave: () => {
            props.setCanZoom(true);
        },

        onNodesChange: (changes: NodeChange[]) => {
            const updatedNodes = applyNodeChanges(changes, props.nodes);
            props.setNodes(updatedNodes);
        },

        onMouseMove: (event: React.MouseEvent) => props.handleMouseMove(event),
    };

    const newProps: ReactFlowProps = {
        ...eventHandlers,
        nodes: props.nodes,
        edges: props.edges,
    };

    const childrenWithProps = React.Children.map(props.children, (child) => {
        if (React.isValidElement(child) && child.type === ReactFlow) {
            return React.cloneElement(child, {
                ...newProps,
            });
        }
        return child;
    });

    return <>{childrenWithProps}</>;
};
