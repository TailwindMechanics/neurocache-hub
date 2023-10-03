//path: src\components\react_flow\nodes\sendOutputNode.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import ButtonPreset from "@src/components/components/buttonPreset";
import InputPreset from "@src/components/components/inputPreset";
import CardPreset from "@src/components/components/cardPreset";
import NodeSelectionState from "../utils/nodeSelectionState";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import React, { useState } from "react";
import { NodeProps } from "reactflow";

const Button = new ComponentBuilder(ButtonPreset).withRoundedButton().build();
const Input = new ComponentBuilder(InputPreset).withRoundedElement().build();

const SendOutputNode: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputText, setInputText] = useState("");
	const { setNodeFlowValue } = useNodeFlow();
	const nodeData = props.data as NodeData;

	return (
		<>
			{nodeData.handles?.map((handle, index) =>
				DrawHandle({ handle, nodeData, index }),
			)}
			<CardPreset className={NodeSelectionState(props.id)}>
				<Input
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
				/>
				<Button
					onClick={() => {
						const sourceIds = nodeData.handles
							.filter((handle) => handle.type === "source")
							.map((handle) => handle.id);

						setNodeFlowValue({
							ids: sourceIds,
							payload: inputText,
						});
					}}
				>
					Send
				</Button>
			</CardPreset>
		</>
	);
};

export default React.memo(SendOutputNode);
