//path: src\components\react_flow\nodes\commentPayload.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import InputPreset from "@src/components/components/inputPreset";
import CardPreset from "@src/components/components/cardPreset";
import NodeSelectionState from "../utils/nodeSelectionState";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import { sendOutput } from "../utils/nodeFlowUtils";
import React, { useEffect, useState } from "react";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import { NodeProps } from "reactflow";

const Input = new ComponentBuilder(InputPreset).withRoundedButton().build();

const CommentPayload: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputText, setInputText] = useState("");
	const { nodeFlowValue, setNodeFlowValue } = useNodeFlow();
	const nodeData = props.data as NodeData;

	useEffect(() => {
		const newValue = nodeFlowValue;
		newValue.payload = `${inputText}: {${nodeFlowValue.payload}}`;
		sendOutput(nodeData, newValue, setNodeFlowValue);
	}, [nodeFlowValue]);

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
			</CardPreset>
		</>
	);
};

export default React.memo(CommentPayload);
