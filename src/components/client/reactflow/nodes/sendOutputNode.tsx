//path: src\components\client\reactflow\nodes\sendOutputNode.tsx

import NodeSelectionState from "../utils/nodeSelectionState";
import ComponentBuilder from "../../ui/ComponentBuilder";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import ButtonPreset from "../../ui/buttonPreset";
import InputPreset from "../../ui/inputPreset";
import { NodeData } from "@src/types/nodeData";
import CardPreset from "../../ui/cardPreset";
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
