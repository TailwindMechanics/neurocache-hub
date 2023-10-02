import { customNodeDefaults } from "@src/data/customNodeTypes";
import { spawnSpawnerNode } from "../utils/spawnerNodeUtils";
import useMousePosition from "@src/hooks/useMousePosition";
import { useSession } from "@supabase/auth-helpers-react";
import React, { FC, ReactNode, useState } from "react";
import {
	applyEdgeChanges,
	applyNodeChanges,
	Connection,
	EdgeChange,
	NodeChange,
	addEdge,
	Node,
	Edge,
} from "reactflow";

type NodeEventsProps = {
	children: ReactNode;
};

const NodeEvents: FC<NodeEventsProps> = ({ children }) => {
	const { mouseCoordsRef } = useMousePosition();
	const [selectedNodes] = useState<Node[]>([]);
	const [nodes, setNodes] = useState<Node[]>([]);
	const [edges, setEdges] = useState<Edge[]>([]);
	const [canZoom, setCanZoom] = useState(true);
	const session = useSession();

	const eventHandlers = {
		onConnect: (connection: Edge | Connection) => {
			const newConnection = { ...connection, type: "custom" };
			const newEdges = addEdge(newConnection, edges);
			setEdges(newEdges);
		},
		onContextMenu: (event: React.MouseEvent) => {
			event.preventDefault();
			setCanZoom(true);

			if (!session) return;

			const spawnerNode = spawnSpawnerNode(
				mouseCoordsRef.current,
				customNodeDefaults,
			);

			setNodes((prevNodes: Node[]) => [...prevNodes, spawnerNode]);
		},
		onEdgesChange: (changes: EdgeChange[]) => {
			const updatedEdges = applyEdgeChanges(changes, edges);
			setEdges(updatedEdges);
		},
		onNodeMouseEnter: (event: React.MouseEvent, node: Node) => {
			const cursorOverSelected = selectedNodes.find(
				(selectedNode) => selectedNode.id === node.id,
			);
			setCanZoom(!cursorOverSelected);
		},
		onNodeMouseLeave: () => {
			setCanZoom(true);
		},
		onNodesChange: (changes: NodeChange[]) => {
			const updatedNodes = applyNodeChanges(changes, nodes);
			setNodes(updatedNodes);
		},
	};

	// Inject event handlers directly into ReactFlow as props
	const childrenWithProps = React.Children.map(children, (child) => {
		if (React.isValidElement(child) && child.type === "ReactFlow") {
			return React.cloneElement(child, eventHandlers);
		}
		return child;
	});

	return <>{childrenWithProps}</>;
};

export default NodeEvents;
