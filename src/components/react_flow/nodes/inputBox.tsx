//path: src\components\react_flow\nodes\inputBox.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { NodeProps, XYPosition, useReactFlow } from "reactflow";
import NodeSelectionState from "../utils/nodeSelectionState";
import TextBoxAtom from "@src/components/atoms/textBoxAtom";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import CardAtom from "@src/components/atoms/cardAtom";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import { useEffect, useState } from "react";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("space-y-2")
	.withStyle("p-1.5")
	.withStyle("w-50")
	.withRounded()
	.withShadow()
	.withBg()
	.build();

const InputBox: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputBoxText, setinputLabelText] = useState("Input box");
	const reactFlowInstance = useReactFlow();
	const { nodeFlowValue } = useNodeFlow();
	const config = props.data as NodeData;

	const thisNode = reactFlowInstance?.getNode(config.nodeId);
	const thisNodeSize: XYPosition = {
		x: thisNode?.width as number,
		y: thisNode?.height as number,
	};

	useEffect(() => {
		const anyInputIncluded = config.handles.some((input) => {
			return (
				input.type === "target" && nodeFlowValue.ids.includes(input.id)
			);
		});

		if (anyInputIncluded) {
			let displayText = !IsNullOrEmpty(nodeFlowValue.payload)
				? (nodeFlowValue.payload as string)
				: "Input box";

			setinputLabelText(displayText);
		}
	}, [nodeFlowValue]);

	return (
		<>
			{config.handles?.map((handle, index) =>
				DrawHandle(handle, thisNodeSize, index),
			)}
			<Root className={NodeSelectionState(reactFlowInstance, props.id)}>
				<TextBoxAtom
					className={
						"rounded-b-lg rounded-t-sm bg-night-dark px-2 text-sm text-aqua-light ring-1 ring-night-light"
					}
					value={`${inputBoxText}`}
				/>
			</Root>
		</>
	);
};

export default InputBox;
