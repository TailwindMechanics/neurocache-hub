//path: src\data\customNodeTypes.tsx

import buttonOutput from "@src/components/react_flow/nodes/buttonOutput";
import spawnerNode from "@src/components/react_flow/nodes/spawnerNode";
import anchorNode from "@src/components/react_flow/nodes/anchorNode";
import openAiNode from "@src/components/react_flow/nodes/openAiNode";
import inputBox from "@src/components/react_flow/nodes/inputBox";
import { NodeTypes } from "reactflow";

const customNodeTypes: NodeTypes = {
	button_output: buttonOutput,
	input_box: inputBox,
	open_ai: openAiNode,
	anchor: anchorNode,
	spawner: spawnerNode,
};

export default customNodeTypes;
