//path: src\components\react_flow\nodes\buttonOutput.tsx

import { NodeConfigItem } from "@src/types/declarations";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import withBaseNode from "../core/baseNode";
import React, { useState } from "react";
import { NodeProps } from "reactflow";

const ButtonOutput: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputText, setInputText] = useState("");
	const config = props.data as NodeConfigItem;
	const { setNodeFlowValue } = useNodeFlow();

	return (
		<div className="-n-4 flex-col space-y-2 px-6 pb-6 pt-2">
			<input
				type="text"
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				className="w-full rounded border border-gray-300"
			/>
			<button
				onClick={() => {
					setNodeFlowValue({
						ids: [config.outputId],
						payload: inputText,
					});
				}}
				className="w-full rounded bg-blue-500 py-2 text-white"
			>
				Send Output
			</button>
		</div>
	);
};

export default withBaseNode(ButtonOutput);
