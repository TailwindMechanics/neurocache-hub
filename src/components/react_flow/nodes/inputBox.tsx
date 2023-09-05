//path: src\components\react_flow\nodes\inputBox.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import TextBoxAtom from "@src/components/atoms/textBoxAtom";
import { NodeConfigItem } from "@src/types/declarations";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { useEffect, useState } from "react";
import withBaseNode from "../core/baseNode";
import { NodeProps } from "reactflow";
import { IsNullOrEmpty } from "@src/utils/stringUtils";

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
	const config = props.data as NodeConfigItem;
	const { nodeFlowValue } = useNodeFlow();

	useEffect(() => {
		if (nodeFlowValue.ids.includes(config.inputId)) {
			let displayText = !IsNullOrEmpty(nodeFlowValue.payload)
				? (nodeFlowValue.payload as string)
				: "Input box";

			setinputLabelText(displayText);
		}
	}, [nodeFlowValue]);

	return (
		<Root>
			<TextBoxAtom
				width={64}
				height={64}
				className={
					"rounded-b-lg rounded-t-sm bg-night-dark px-2 text-aqua-light ring-1 ring-night-light"
				}
				value={`${inputBoxText}`}
			/>
		</Root>
	);
};

export default withBaseNode(InputBox);
