//path: src\components\atoms\nodeDropdown.tsx

// NodeDropdown.tsx

import { NodeConfigItem } from "@src/types/declarations";
import { Listbox } from "@headlessui/react";
import nodeConfig from "@data/nodeConfig";
import { useState } from "react";

interface NodeDropdownProps {
	onNodeCreate: (node: any) => void;
}

const NodeDropdown: React.FC<NodeDropdownProps> = ({ onNodeCreate }) => {
	const [selectedNode, setSelectedNode] = useState<NodeConfigItem>(
		nodeConfig[0],
	);

	const handleSelection = (config: NodeConfigItem) => {
		const newNode = new config.component({
			title: config.title,
			body: config.body,
			type: config.type,
		});

		onNodeCreate(newNode);
	};

	return (
		<Listbox value={selectedNode} onChange={handleSelection}>
			<Listbox.Button>{selectedNode.label}</Listbox.Button>
			<Listbox.Options>
				{nodeConfig.map((config, index) => (
					<Listbox.Option key={index} value={config} as="li">
						{config.label}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	);
};

export default NodeDropdown;
