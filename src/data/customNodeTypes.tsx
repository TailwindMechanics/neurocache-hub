//path: src\data\customNodeTypes.tsx

import buttonOutput from "@src/components/react_flow/nodes/buttonOutput";
import spawnerNode from "@src/components/react_flow/nodes/spawnerNode";
import anchorNode from "@src/components/react_flow/nodes/anchorNode";
import openAiNode from "@src/components/react_flow/nodes/openAiNode";
import inputBox from "@src/components/react_flow/nodes/inputBox";
import { NodeData } from "@src/types/nodeData";
import { NodeTypes } from "reactflow";

const customNodeTypes: NodeTypes = {
	button_output: buttonOutput,
	input_box: inputBox,
	open_ai: openAiNode,
	anchor: anchorNode,
	spawner: spawnerNode,
};

export const getUnhiddenNodes = () => {
	return customNodeDefaults.filter((node) => node.category !== "Hidden");
};

export const customNodeDefaults = [
	{
		nodeType: "button_output",
		nodeName: "Output Button",
		category: "Debug",
		nodeId: "node_button_output_60e9b8e9a7f1d8c7c7f6",
		body: "This node outputs the InputField text when the Button is clicked.",
		handles: [
			{
				id: "in_button_output_60e9b8e9a7f1d8c7c7f6",
				type: "target",
				position: "left",
			},
			{
				id: "out_button_output_60e9b8e9a7f1d8c7c7f6",
				type: "source",
				position: "right",
			},
		],
		nodePosition: { x: 0, y: 0 },
	} as NodeData,
	{
		nodeType: "input_box",
		nodeName: "Input Box",
		category: "Debug",
		nodeId: "node_input_box_60e9b8e9a7f1d8c7c7f7",
		body: "This node displays input payload it receives.",
		handles: [
			{
				id: "in_input_box_60e9b8e9a7f1d8c7c7f7",
				type: "target",
				position: "left",
			},
			{
				id: "out_input_box_60e9b8e9a7f1d8c7c7f7",
				type: "source",
				position: "right",
			},
		],
		nodePosition: { x: 50, y: 0 },
	} as NodeData,
	{
		nodeType: "open_ai",
		nodeName: "Gpt-4",
		category: "OpenAi",
		nodeId: "node_open_ai_60e9b8e9a7f1d8c7c7f8",
		body: "This node makes an API request to OpenAI.",
		handles: [
			{
				id: "in_open_ai_60e9b8e9a7f1d8c7c7f8",
				type: "target",
				position: "left",
			},
			{
				id: "out_open_ai_60e9b8e9a7f1d8c7c7f8",
				type: "source",
				position: "right",
			},
		],
		nodePosition: { x: 100, y: 0 },
	} as NodeData,
	{
		nodeType: "anchor",
		nodeName: "✣",
		category: "Utilities",
		nodeId: "anchor_60e9b8e9a7f1d8c7c7f9",
		body: "This node is used to clean up the flow.",
		handles: [],
		nodePosition: { x: 150, y: 0 },
	} as NodeData,
	{
		nodeType: "spawner",
		nodeName: "Spawner",
		category: "Hidden",
		nodeId: "node_spawner_1",
		body: "This node spawns other nodes.",
		handles: [],
		nodePosition: { x: 200, y: 0 },
	} as NodeData,
];

export default customNodeTypes;
