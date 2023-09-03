//path: src\data\nodeConfig.tsx

import buttonOutput from "@src/components/react_flow/nodes/buttonOutput";
import openAiNode from "@src/components/react_flow/nodes/openAiNode";
import inputLabel from "@src/components/react_flow/nodes/inputLabel";
import { NodeConfigItem, CustomNode } from "@src/types/declarations";
import { Uid } from "@src/utils/stringUtils";

const customNodes = {
	buttonOutput: {
		type: "button_output",
		label: "Output Button",
		component: buttonOutput,
	} as CustomNode,
	inputLabel: {
		type: "input_label",
		label: "Input Label",
		component: inputLabel,
	} as CustomNode,
	openAiNode: {
		type: "open_ai_node",
		label: "OpenAI Node",
		component: openAiNode,
	} as CustomNode,
};

const createNodeConfig = (
	node: CustomNode,
	title: string,
	body: string,
	pos: { x: number; y: number },
): NodeConfigItem => {
	const uid = Uid();
	return {
		node: node,
		outputId: `${node.type}_${uid}_output`,
		inputId: `${node.type}_${uid}_input`,
		nodeId: `${node.type}_${uid}_node`,
		title: title,
		body: body,
		position: pos,
	};
};

const nodeConfig: NodeConfigItem[] = [
	createNodeConfig(
		customNodes.buttonOutput,
		"Output On Button Click",
		"This node outputs the InputField text when the Button is clicked.",
		{ x: 0, y: 0 },
	),
	createNodeConfig(
		customNodes.inputLabel,
		"Display Input",
		"This node displays input payload it receives.",
		{ x: 50, y: 0 },
	),
	createNodeConfig(
		customNodes.openAiNode,
		"OpenAI Node",
		"This node makes an API request to OpenAI.",
		{ x: 100, y: 0 },
	),
];

export default nodeConfig;
