//path: src\components\react_flow\nodes\sendOutputNode.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import NodeSelectionState from "../utils/nodeSelectionState";
import ButtonAtom from "@src/components/atoms/buttonAtom";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import InputAtom from "@src/components/atoms/inputAtom";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import React, { useState } from "react";
import { NodeProps } from "reactflow";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("space-y-0.5")
	.withStyle("font-mono")
	.withStyle("flex-col")
	.withStyle("text-xs")
	.withStyle("p-1.5")
	.withStyle("flex")
	.withRoundedFrame()
	.withShadow()
	.withBg()
	.build();

const Button = new ComponentBuilder(ButtonAtom)
	.withStyle("border-night-light")
	.withStyle("text-night-title")
	.withStyle("bg-night")
	.withStyle("text-aqua")
	.withStyle("font-bold")
	.withStyle("border")
	.withStyle("w-full")
	.withRoundedButton()
	.build();

const Input = new ComponentBuilder(InputAtom)
	.withStyle("focus:border-aqua-light")
	.withStyle("border-night-light")
	.withStyle("text-aqua-light")
	.withStyle("bg-night-black")
	.withStyle("text-center")
	.withStyle("outline-none")
	.withStyle("ring-none")
	.withStyle("border")
	.withStyle("py-0.5")
	.withStyle("w-full")
	.withStyle("h-full")
	.withStyle("px-1")
	.withRoundedElement()
	.build();

const SendOutputNode: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputText, setInputText] = useState("");
	const { setNodeFlowValue } = useNodeFlow();
	const nodeData = props.data as NodeData;

	return (
		<>
			{nodeData.handles?.map((handle, index) =>
				DrawHandle({ handle, nodeData, index }),
			)}
			<Root className={NodeSelectionState(props.id)}>
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
			</Root>
		</>
	);
};

export default React.memo(SendOutputNode);
