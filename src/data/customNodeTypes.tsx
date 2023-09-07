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
		inputs: [
			{
				id: "in_button_output_60e9b8e9a7f1d8c7c7f6",
				position: "left",
			},
		],
		outputs: [
			{
				id: "out_button_output_60e9b8e9a7f1d8c7c7f6",
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
		inputs: [
			{
				id: "in_input_box_60e9b8e9a7f1d8c7c7f7",
				position: "left",
			},
		],
		outputs: [
			{
				id: "out_input_box_60e9b8e9a7f1d8c7c7f7",
				position: "right",
			},
		],
		nodePosition: { x: 50, y: 0 },
	} as NodeData,
	{
		nodeType: "open_ai",
		nodeName: "OpenAI",
		category: "OpenAi",
		nodeId: "node_open_ai_60e9b8e9a7f1d8c7c7f8",
		body: "This node makes an API request to OpenAI.",
		inputs: [
			{
				id: "in_open_ai_60e9b8e9a7f1d8c7c7f8",
				position: "left",
			},
		],
		outputs: [
			{
				id: "out_open_ai_60e9b8e9a7f1d8c7c7f8",
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
		inputs: [
			{
				id: "in_anchor_1_60e9b8e9a7f1d8c7c7f9",
				position: "left",
			},
			{
				id: "in_anchor_2_60e9b8e9a7f1d8c7c7f9",
				position: "top",
			},
			{
				id: "in_anchor_3_60e9b8e9a7f1d8c7c7f9",
				position: "right",
			},
			{
				id: "in_anchor_4_60e9b8e9a7f1d8c7c7f9",
				position: "bottom",
			},
		],
		outputs: [
			{
				id: "out_anchor_1_60e9b8e9a7f1d8c7c7f9",
				position: "left",
			},
			{
				id: "out_anchor_2_60e9b8e9a7f1d8c7c7f9",
				position: "top",
			},
			{
				id: "out_anchor_3_60e9b8e9a7f1d8c7c7f9",
				position: "right",
			},
			{
				id: "out_anchor_4_60e9b8e9a7f1d8c7c7f9",
				position: "bottom",
			},
		],
		nodePosition: { x: 150, y: 0 },
	} as NodeData,
	{
		nodeType: "spawner",
		nodeName: "Spawner",
		category: "Hidden",
		nodeId: "node_spawner_1",
		body: "This node spawns other nodes.",
		inputs: [],
		outputs: [],
		nodePosition: { x: 200, y: 0 },
	} as NodeData,
];

export default customNodeTypes;
