//path: src\components\react_flow\nodes\inputBox.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import NodeSelectionState from "../utils/nodeSelectionState";
import TextBoxAtom from "@src/components/atoms/textBoxAtom";
import { useNodeFlow } from "@src/hooks/useNodeFlow";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import { useEffect, useState } from "react";
import { NodeProps } from "reactflow";
import React from "react";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("scrollbar-hide")
	.withStyle("overflow-auto")
	.withStyle("max-w-[260px]")
	.withStyle("max-h-[200px]")
	.withStyle("break-words")
	.withStyle("font-mono")
	.withStyle("space-y-2")
	.withStyle("p-1.5")
	.withRounded()
	.withShadow()
	.withBg()
	.build();

const InputBox: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputBoxText, setinputLabelText] = useState("Text box");
	const { nodeFlowValue } = useNodeFlow();
	const nodeData = props.data as NodeData;

	useEffect(() => {
		const anyInputIncluded = nodeData.handles.some((input) => {
			return (
				input.type === "target" && nodeFlowValue.ids.includes(input.id)
			);
		});

		if (anyInputIncluded) {
			let displayText = !IsNullOrEmpty(nodeFlowValue.payload)
				? (nodeFlowValue.payload as string)
				: "Text box";

			setinputLabelText(displayText);
		}
	}, [nodeFlowValue]);

	return (
		<>
			{nodeData.handles?.map((handle, index) =>
				DrawHandle({ handle, nodeData, index }),
			)}
			<Root className={NodeSelectionState(props.id)}>
				<TextBoxAtom
					className={
						"prose rounded-b-lg rounded-t-sm bg-night-dark px-2 text-sm text-aqua-light ring-1 ring-night-light prose-code:text-aqua-body prose-pre:bg-night prose-pre:scrollbar-hide"
					}
					value={`${inputBoxText}`}
				/>
			</Root>
		</>
	);
};

export default React.memo(InputBox);
