//path: src\data\nodeConfig.tsx

import ButtonNode from "@src/components/react_flow/nodes/buttonNode";
import LabelNode from "@src/components/react_flow/nodes/labelNode";
import { NodeConfigItem } from "@src/types/declarations";

const nodeConfig: NodeConfigItem[] = [
	{
		component: ButtonNode,
		title: "Output On Button Click",
		body: "This node outputs the InputField text when the Button is clicked.",
		type: "output_text_debug_node",
		label: "Output Button",
	},
	{
		component: LabelNode,
		title: "Display Input",
		body: "This node displays input payload it receives.",
		type: "input_display_node",
		label: "Display Input",
	},
	{
		component: LabelNode,
		title: "Display Input",
		body: "This node displays input payload it receives.",
		type: "input_display_node",
		label: "Display Input",
	},
	// {
	// 	component: LabelNode,
	// 	title: "Display Input",
	// 	body: "This node displays input payload it receives.",
	// 	type: "input_display_node",
	// 	label: "Display Input",
	// },
	// {
	// 	component: LabelNode,
	// 	title: "Display Input",
	// 	body: "This node displays input payload it receives.",
	// 	type: "input_display_node",
	// 	label: "Display Input",
	// },
];

export default nodeConfig;
