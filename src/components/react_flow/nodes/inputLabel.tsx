//path: src\components\react_flow\nodes\inputLabel.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { NodeConfigItem } from "@src/types/declarations";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import { useEffect, useState } from "react";
import withBaseNode from "../core/baseNode";
import { NodeProps } from "reactflow";
import TextBoxAtom from "@src/components/atoms/textBoxAtom";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("text-aqua-title")
	.withStyle("font-mono")
	.withStyle("space-y-2")
	.withStyle("w-50")
	.withStyle("p-2")
	.withRounded()
	.withBg()
	.build();

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
		<Root>
			<TextBoxAtom
				width={64}
				className={"border border-aqua-title"}
				value={`Received input: ${inputLabelText}`}
				height={0}
			/>
		</Root>
	);
};

export default withBaseNode(InputLabel);
