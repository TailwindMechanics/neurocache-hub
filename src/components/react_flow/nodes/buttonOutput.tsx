//path: src\components\react_flow\nodes\buttonOutput.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import ButtonAtom from "@src/components/atoms/buttonAtom";
import { NodeConfigItem } from "@src/types/declarations";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import InputAtom from "@src/components/atoms/inputAtom";
import withBaseNode from "../core/baseNode";
import React, { useState } from "react";
import { NodeProps } from "reactflow";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("space-y-2")
	.withStyle("font-mono")
	.withStyle("flex-col")
	.withStyle("p-2")
	.withRounded()
	.withBg()
	.build();

const ButtonOutput: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputText, setInputText] = useState("");
	const config = props.data as NodeConfigItem;
	const { setNodeFlowValue } = useNodeFlow();

	return (
		<>
			<Root>
				<InputAtom
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
					className="w-full rounded border border-aqua"
				/>
				<ButtonAtom
					onClick={() => {
						setNodeFlowValue({
							ids: [config.outputId],
							payload: inputText,
						});
					}}
					className="w-full rounded border-2 border-aqua-dark bg-aqua-dark text-aqua-title hover:bg-aqua"
				>
					Send Output
				</ButtonAtom>
			</Root>
		</>
	);
};

export default withBaseNode(React.memo(ButtonOutput));
