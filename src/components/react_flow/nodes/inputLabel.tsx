//path: src\components\react_flow\nodes\inputLabel.tsx

import { NodeConfigItem } from "@src/types/declarations";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import { useEffect, useState } from "react";
import withBaseNode from "../core/baseNode";
import { NodeProps } from "reactflow";

const InputLabel: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputLabelText, setinputLabelText] = useState("");
	const config = props.data as NodeConfigItem;
	const { nodeFlowValue } = useNodeFlow();

	useEffect(() => {
		if (nodeFlowValue.ids.includes(config.inputId)) {
			setinputLabelText(nodeFlowValue.payload as string);
		}
	}, [nodeFlowValue]);

	return (
		<div className="space-y-2 px-6 pb-6 pt-2">
			<p className="text-gray-700">Received input: {inputLabelText}</p>
		</div>
	);
};

export default withBaseNode(InputLabel);
