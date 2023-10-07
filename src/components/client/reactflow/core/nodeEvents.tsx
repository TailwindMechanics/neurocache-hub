//path: src\components\client\reactflow\core\nodeEvents.tsx

import { removeSpawnerNode, spawnSpawnerNode } from "../utils/spawnerNodeUtils";
import { customNodeDefaults } from "@src/data/customNodeTypes";
import { useSession } from "@supabase/auth-helpers-react";
import useKeyPress from "@src/hooks/useKeyPress";
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
	const session = useSession();
	useOnSelectionChange({
		onChange: ({ nodes, edges }) => {
			props.setSelectedNodes(nodes);
			props.setCanZoom(!nodes.length);
		},
	});

	useKeyPress("Escape", () => {
		props.setNodes((prevNodes: Node[]) => removeSpawnerNode(prevNodes));
	});

	const eventHandlers = {
		onMouseDownCapture: (event: React.MouseEvent) => {
			const isSpawner = (event.target as HTMLElement).closest(
				'[data-type="atom-node"]',
			);
			if (!isSpawner) {
				props.setNodes((prevNodes: Node[]) =>
					removeSpawnerNode(prevNodes),
				);
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

			if (!session) return;

			const spawnerNode = spawnSpawnerNode(
				props.mouseCoordsRef.current,
				customNodeDefaults,
			);

			props.setNodes((prevNodes: Node[]) => [...prevNodes, spawnerNode]);
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
