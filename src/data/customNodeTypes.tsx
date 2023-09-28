//path: src\data\customNodeTypes.tsx

import SplitterNode from "@src/components/react_flow/nodes/splitterNode";
import ButtonOutput from "@src/components/react_flow/nodes/buttonOutput";
import SpawnerNode from "@src/components/react_flow/nodes/spawnerNode";
import OpenAiNode from "@src/components/react_flow/nodes/openAiNode";
import LoginNode from "@src/components/react_flow/nodes/loginNode";
import InputBox from "@src/components/react_flow/nodes/inputBox";
import { NodeData } from "@src/types/nodeData";
import { NodeTypes } from "reactflow";

const customNodeTypes: NodeTypes = {
	splitter: SplitterNode,
	input_box: InputBox,
	button_output: ButtonOutput,
	open_ai: OpenAiNode,
	spawner: SpawnerNode,
	login: LoginNode,
};

export const getUnhiddenNodes = () => {
	return customNodeDefaults.filter((node) => node.category !== "Hidden");
};

export const customNodeDefaults = [
	{
		nodeType: "splitter",
		nodeName: "Splitter",
		category: "Utilities",
		nodeId: "splitter_60e9b8e9a7f1d8c7c7f9",
		body: "This node is used to split the flow.",
		handles: [
			{
				id: "in_splitter_1_60e9b8e9a7f1d8c7c7f9",
				type: "target",
				offset: { x: 50, y: -8 },
				angle: 0,
			},
			{
				id: "out_splitter_1_60e9b8e9a7f1d8c7c7f9",
				type: "source",
				offset: { x: 8, y: 85 },
				angle: 240,
			},
			{
				id: "out_splitter_2_60e9b8e9a7f1d8c7c7f9",
				type: "source",
				offset: { x: 92, y: 85 },
				angle: 120,
			},
		],
		nodePosition: { x: 150, y: 0 },
	} as NodeData,
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
				offset: { x: -0.33, y: 40 },
				angle: -90,
			},
			{
				id: "out_button_output_60e9b8e9a7f1d8c7c7f6",
				type: "source",
				offset: { x: 100.33, y: 40 },
				angle: 90,
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
				offset: { x: -0.33, y: 40 },
				angle: -90,
			},
			{
				id: "out_input_box_60e9b8e9a7f1d8c7c7f7",
				type: "source",
				offset: { x: 100.33, y: 40 },
				angle: 90,
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
				offset: { x: -0.33, y: 40 },
				angle: -90,
			},
			{
				id: "out_open_ai_60e9b8e9a7f1d8c7c7f8",
				type: "source",
				offset: { x: 100.33, y: 40 },
				angle: 90,
			},
		],
		nodePosition: { x: 100, y: 0 },
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
	{
		nodeType: "login",
		nodeName: "Login",
		category: "UnHidden",
		nodeId: "node_login_1",
		body: "This node logs a user in.",
		handles: [],
		nodePosition: { x: 0, y: 0 },
	} as NodeData,
];

export default customNodeTypes;
