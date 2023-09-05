//path: src\data\nodeConfig.tsx

import buttonOutput from "@src/components/react_flow/nodes/buttonOutput";
import openAiNode from "@src/components/react_flow/nodes/openAiNode";
import inputLabel from "@src/components/react_flow/nodes/inputLabel";
import anchorNode from "@src/components/react_flow/nodes/anchorNode";
import { NodeConfigItem } from "@src/types/declarations";
import { Uid } from "@src/utils/stringUtils";
import { Position } from "reactflow";

export type CustomNode =
	| {
			type: "button_output";
			label: "Output Button";
			component: typeof buttonOutput;
	  }
	| {
			type: "input_label";
			label: "Input Label";
			component: typeof inputLabel;
	  }
	| {
			type: "open_ai_node";
			label: "OpenAI Node";
			component: typeof openAiNode;
	  }
	| {
			type: "anchor_node";
			label: "Anchor Node";
			component: typeof anchorNode;
	  };

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
	anchorNode: {
		type: "anchor_node",
		label: "Anchor Node",
		component: anchorNode,
	} as CustomNode,
};

const createNodeConfig = (
	node: CustomNode,
	title: string,
	body: string,
	pos: { x: number; y: number },
	inputPosition: Position = Position.Left,
	outputPosition: Position = Position.Right,
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
		inputPosition: inputPosition,
		outputPosition: outputPosition,
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
	createNodeConfig(
		customNodes.anchorNode,
		">",
		"This node is used to clean up the flow.",
		{ x: 100, y: 0 },
	),
	createNodeConfig(
		customNodes.anchorNode,
		"v",
		"This node is used to clean up the flow.",
		{ x: 100, y: 0 },
		Position.Top,
		Position.Bottom,
	),
	createNodeConfig(
		customNodes.anchorNode,
		"<",
		"This node is used to clean up the flow.",
		{ x: 100, y: 0 },
		Position.Right,
		Position.Left,
	),
	createNodeConfig(
		customNodes.anchorNode,
		"^",
		"This node is used to clean up the flow.",
		{ x: 100, y: 0 },
		Position.Bottom,
		Position.Top,
	),
];

export default nodeConfig;
