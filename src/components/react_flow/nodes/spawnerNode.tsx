//path: src\components\react_flow\nodes\spawnerNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { createNode } from "@src/components/react_flow/utils/nodeUtils";
import { getUnhiddenNodes } from "@src/data/customNodeTypes";
import { Node, NodeProps, useReactFlow } from "reactflow";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import useKeyPress from "@src/hooks/useKeyPress";
import { NodeData } from "@src/types/nodeData";
import { Combobox } from "@headlessui/react";
import { useState } from "react";

const Root = new ComponentBuilder(AtomicDiv)
	.withData("type", "spawner-node")
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("text-xs")
	.withStyle("w-50")
	.withStyle("p-2")
	.withRounded()
	.withShadow()
	.withBg()
	.build();

const nodeLabel = (node: NodeData) => {
	if (!node) return "";
	if (IsNullOrEmpty(node.nodeName)) return node.nodeName;

	const label = node.nodeName.replace("Node", "").trim();
	return `${node.category}/${label}`;
};

const SpawnerNode: React.FC<NodeProps> = (props: NodeProps) => {
	const reactFlowInstance = useReactFlow();
	const [query, setQuery] = useState("");
	const config = props.data as NodeData;
	const allNodes = getUnhiddenNodes();
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

	useKeyPress("Enter", handleEnterPress);
	useKeyPress("Return", handleEnterPress);

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
			position: config.nodePosition,
			data: { ...node },
		};

		const prevNodes = deselectAll(reactFlowInstance.getNodes());
		let newNodes = prevNodes.filter(
			(n) => n.id !== config.nodeId,
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
			<Root>
				<Combobox>
					<Combobox.Input
						placeholder="Search for a node..."
						autoFocus
						className="rounded-b-lg rounded-t-sm bg-night-black px-2 text-aqua-light ring-1 ring-night-light focus:outline-none focus:ring-aqua-light"
						displayValue={(node: NodeData) => nodeLabel(node)}
						onChange={(event) => setQuery(event.target.value)}
					/>
					<Combobox.Options className={"pt-1"} static>
						{filteredNodes.map((node: NodeData) => (
							<Combobox.Option
								key={node.nodeName}
								className={"hover:text-aqua-body"}
								value={node.nodeName}
								onClick={() => {
									onSelect(node);
								}}
							>
								{`${node.category}/${node.nodeName}`}
							</Combobox.Option>
						))}
					</Combobox.Options>
				</Combobox>
			</Root>
		</>
	);
};

export default SpawnerNode;
