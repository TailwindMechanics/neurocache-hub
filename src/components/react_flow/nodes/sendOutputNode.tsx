//path: src\components\react_flow\nodes\sendOutputNode.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import NodeSelectionState from "../utils/nodeSelectionState";
import ButtonAtom from "@src/components/atoms/buttonAtom";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import InputAtom from "@src/components/atoms/inputAtom";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import React, { useState } from "react";
import { NodeProps } from "reactflow";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("space-y-1")
	.withStyle("font-mono")
	.withStyle("flex-col")
	.withStyle("text-sm")
	.withStyle("p-1.5")
	.withStyle("w-40")
	.withRounded()
	.withShadow()
	.withBg()
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
				<InputAtom
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
					className="w-full rounded-sm bg-night-black px-1 text-aqua-light ring-1 ring-night-light focus:outline-none focus:ring-aqua-light"
				/>
				<ButtonAtom
					onClick={() => {
						const sourceIds = nodeData.handles
							.filter((handle) => handle.type === "source")
							.map((handle) => handle.id);

						setNodeFlowValue({
							ids: sourceIds,
							payload: inputText,
						});
					}}
					className="w-full rounded-b-lg rounded-t-sm border border-night-light bg-night text-night-title "
				>
					Send Output
				</ButtonAtom>
			</Root>
		</>
	);
};

export default React.memo(SendOutputNode);
