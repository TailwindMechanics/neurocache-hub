//path: src\components\atoms\nodeDropdown.tsx

import { NodeConfigItem } from "@src/types/declarations";
import { Listbox } from "@headlessui/react";
import nodeConfig from "@data/nodeConfig";
import { useState } from "react";
import { NodeProps } from "reactflow";

interface NodeDropdownProps {
	onNodeCreate: (node: any) => void;
}

const NodeDropdown: React.FC<NodeDropdownProps> = ({ onNodeCreate }) => {
	const [selectedNode, setSelectedNode] = useState<NodeConfigItem>(
		nodeConfig[0],
	);

	const handleSelection = (props: NodeProps) => {
		// const config = props.data as NodeConfigItem;
		// const newNode = new config.node({
		// 	title: config.title,
		// 	body: config.body,
		// 	type: props.type,
		// }) as any;
		// onNodeCreate(newNode);
	};

	return (
		<>
			{/* <Listbox value={selectedNode} onChange={handleSelection}>
				<Listbox.Button>{selectedNode.label}</Listbox.Button>
				<Listbox.Options>
					{nodeConfig.map((config, index) => (
						<Listbox.Option key={index} value={config} as="li">
							{config.label}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox> */}
		</>
	);
};

export default NodeDropdown;
