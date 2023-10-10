//path: src\modules\NeuroGraph\nodes\commentPayload.tsx

import React, { useEffect, useState } from "react";
import { NodeProps } from "reactflow";

import { DrawHandle, NodeSelectionState, sendOutput } from "..";
import Components from "@client/components";
import { NodeData } from "@shared/types";
import Use from "@client/hooks";

const Input = new Components.Builder(Components.Input.Default)
	.withRoundedButton()
	.build();

const CommentPayload: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputText, setInputText] = useState("");
	const { nodeFlowValue, setNodeFlowValue } = Use.NodeFlow();
	const nodeData = props.data as NodeData;

	useEffect(() => {
		const newValue = nodeFlowValue;
		newValue.payload = `${inputText}: {${nodeFlowValue.payload}}`;
		sendOutput(nodeData, newValue, setNodeFlowValue);
	}, [inputText, nodeData, nodeFlowValue, setNodeFlowValue]);

	return (
		<>
			{nodeData.handles?.map((handle, index) =>
				DrawHandle({ handle, nodeData, index }),
			)}
			<Components.Card className={NodeSelectionState(props.id)}>
				<Input
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
				/>
			</Components.Card>
		</>
	);
};

export default React.memo(CommentPayload);
