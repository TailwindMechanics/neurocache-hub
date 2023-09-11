//path: src\components\react_flow\nodes\inputBox.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import TextBoxAtom from "@src/components/atoms/textBoxAtom";
import { ReactFlowHelper } from "@src/utils/reactFlowHelper";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import { NodeData } from "@src/types/nodeData";
import { useEffect, useState } from "react";
import withBaseNode from "../core/baseNode";
import { NodeProps } from "reactflow";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("space-y-2")
	.withStyle("w-50")
	.withStyle("p-2")
	.withRounded()
	.withBg()
	.build();

const InputBox: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputBoxText, setinputLabelText] = useState("Input box");
	const flowHelper = new ReactFlowHelper();
	const { nodeFlowValue } = useNodeFlow();
	const config = props.data as NodeData;

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
		<Root className={flowHelper.updateSelectedState(props.id)}>
			<TextBoxAtom
				width={64}
				height={64}
				className={
					"rounded-b-lg rounded-t-sm bg-night-dark px-2 text-sm text-aqua-light ring-1 ring-night-light"
				}
				value={`${inputBoxText}`}
			/>
		</Root>
	);
};

export default withBaseNode(InputBox);
