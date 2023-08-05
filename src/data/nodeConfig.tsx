//path: src\data\nodeConfig.tsx

// src\data\nodeConfig.ts

import ButtonOutputNode from "@src/components/react_flow/nodes/buttonOutputNode";
import DisplayInputNode from "@src/components/react_flow/nodes/displayInputNode";
import { NodeConfigItem } from "@src/types/declarations";

const nodeConfig: NodeConfigItem[] = [
	{
		component: ButtonOutputNode,
		title: "Output On Button Click",
		body: "This node outputs the InputField text when the Button is clicked.",
		type: "output_text_debug_node",
		label: "Output Button",
	},
	{
		component: DisplayInputNode,
		title: "Display Input",
		body: "This node displays input payload it receives.",
		type: "input_display_node",
		label: "Display Input",
	},
];

export default nodeConfig;
