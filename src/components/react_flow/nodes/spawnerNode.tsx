//path: src\components\react_flow\nodes\spawnerNode.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { CustomNode, customNodes } from "@src/data/nodeConfig";
import { Combobox, Transition } from "@headlessui/react";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import withBaseNode from "../core/baseNode";
import { Fragment, useState } from "react";
import { NodeProps } from "reactflow";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("space-y-2")
	.withStyle("w-50")
	.withStyle("p-2")
	.withRounded()
	.withBg()
	.build();

const nodeLabel = (node: CustomNode) => {
	if (!node) return "";
	if (IsNullOrEmpty(node.label)) return node.label;

	const label = node.label.replace("Node", "").trim();
	return `${node.category}/${label}`;
};

const SpawnerNode: React.FC<NodeProps> = (props: NodeProps) => {
	const customNodesArray = Object.values(customNodes);
	const [selected, setSelected] = useState<CustomNode | null>(null);
	const [query, setQuery] = useState("");

	const filteredNodes =
		query === ""
			? customNodesArray
			: customNodesArray.filter((node) =>
					nodeLabel(node)
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, "")),
			  );

	return (
		<Root>
			<Combobox value={selected} onChange={setSelected}>
				<Combobox.Input
					className="bg-night-black rounded-b-lg rounded-t-sm px-2 text-aqua-light ring-1 ring-night-light focus:outline-none focus:ring-aqua-light"
					displayValue={(node: CustomNode) => nodeLabel(node)}
					onChange={(event) => setQuery(event.target.value)}
				/>
				<Combobox.Options>
					{filteredNodes.map((node) => (
						<Combobox.Option
							key={node.type}
							className={"hover:text-aqua-body"}
							value={node}
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
