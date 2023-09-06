//path: src\components\react_flow\nodes\spawnerNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import nodeDataJson from "@src/data/testGraph.json";
import { NodeData } from "@src/types/nodeData";
import createNode from "@src/utils/createNode";
import { Combobox } from "@headlessui/react";
import withBaseNode from "../core/baseNode";
import { NodeProps } from "reactflow";
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

	const filteredNodes =
		query === ""
			? nodeDataJson.nodes
			: nodeDataJson.nodes.filter((node) =>
					nodeLabel(node)
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, "")),
			  );

	const onSelect = (node: NodeData) => {
		if (node) {
			// Use the createNode utility function to create a new node
			const newNode = createNode({
				type: node.nodeType,
				name: node.nodeName,
				body: node.body,
				ins: node.inputs,
				outs: node.outputs,
				pos: { x: 0, y: 0 },
			});

			// TODO: Add the new node to the graph and write to the JSON file
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
					{filteredNodes.map((node) => (
						<Combobox.Option
							key={node.nodeType}
							className={"hover:text-aqua-body"}
							value={node}
							onClick={() => onSelect(node)}
						>
							{nodeLabel(node)}
						</Combobox.Option>
					))}
				</Combobox.Options>
			</Combobox>
		</Root>
	);
};

export default withBaseNode(SpawnerNode);
