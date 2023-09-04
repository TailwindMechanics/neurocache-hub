//path: src\components\react_flow\nodes\buttonOutput.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { NodeConfigItem } from "@src/types/declarations";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import withBaseNode from "../core/baseNode";
import React, { useState } from "react";
import { NodeProps } from "reactflow";

const ButtonOutput: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputText, setInputText] = useState("");
	const config = props.data as NodeConfigItem;
	const { setNodeFlowValue } = useNodeFlow();

	const Root = new ComponentBuilder(AtomicDiv)
		.withStyle("space-y-2")
		.withStyle("font-mono")
		.withStyle("flex-col")
		.withStyle("p-2")
		.withRounded()
		.withBg()
		.build();

	return (
		<>
			<Root>
				<input
					type="text"
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
					className="w-full rounded border border-aqua"
				/>
				<button
					onClick={() => {
						setNodeFlowValue({
							ids: [config.outputId],
							payload: inputText,
						});
					}}
					className="border-aqua-dark bg-aqua-dark text-aqua-title w-full rounded border-2 hover:bg-aqua"
				>
					Send Output
				</button>
			</Root>
		</>
	);
};

export default withBaseNode(ButtonOutput);
