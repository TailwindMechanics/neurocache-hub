//path: src\components\react_flow\nodes\spawnerNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { customNodeDefaults } from "@src/data/customNodeTypes";
import { Node, NodeProps, useReactFlow } from "reactflow";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import { NodeData } from "@src/types/nodeData";
import createNode from "@src/utils/createNode";
import { Combobox } from "@headlessui/react";
import withBaseNode from "../core/baseNode";
import { useState } from "react";

const Root = new ComponentBuilder(AtomicDiv)
	.withData("type", "spawner-node")
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("space-y-2")
	.withStyle("w-50")
	.withStyle("p-2")
	.withRounded()
	.withBg()
	.build();

const nodeLabel = (node: NodeData) => {
	if (!node) return "";
	if (IsNullOrEmpty(node.nodeName)) return node.nodeName;

	const label = node.nodeName.replace("Node", "").trim();
	return `${node.category}/${label}`;
};

const SpawnerNode: React.FC<NodeProps> = (props: NodeProps) => {
	const [selected, setSelected] = useState<NodeData | null>(null);
	const [query, setQuery] = useState("");
	const reactFlowInstance = useReactFlow();
	const config = props.data as NodeData;

	const spawnNode = (node: NodeData) => {
		const spawnerNode: Node = {
			id: node.nodeId,
			type: node.nodeType,
			position: config.nodePosition,
			data: { ...node },
		};

		reactFlowInstance.setNodes((prevNodes) => {
			const newNodes = [...prevNodes, spawnerNode];
			const filteredNodes = newNodes.filter(
				(n) => n.id !== config.nodeId,
			);
			return filteredNodes;
		});
	};

	const onSelect = (node: NodeData) => {
		if (node) {
			const newNode = createNode({
				type: node.nodeType,
				name: node.nodeName,
				body: node.body,
				ins: node.inputs,
				outs: node.outputs,
				pos: { x: 0, y: 0 },
			});
			spawnNode(newNode);
		}
	};

	return (
		<Root>
			<Combobox value={selected} onChange={setSelected}>
				<Combobox.Input
					className="rounded-b-lg rounded-t-sm bg-night-black px-2 text-aqua-light ring-1 ring-night-light focus:outline-none focus:ring-aqua-light"
					displayValue={(node: NodeData) => nodeLabel(node)}
					onChange={(event) => setQuery(event.target.value)}
				/>
				<Combobox.Options>
					{Object.values(customNodeDefaults).map((node) => (
						<Combobox.Option
							key={node.nodeName}
							className={"hover:text-aqua-body"}
							value={node.nodeName}
							onClick={() => onSelect(node)}
						>
							{node.nodeName}
						</Combobox.Option>
					))}
				</Combobox.Options>
			</Combobox>
		</Root>
	);
};

export default withBaseNode(SpawnerNode);
