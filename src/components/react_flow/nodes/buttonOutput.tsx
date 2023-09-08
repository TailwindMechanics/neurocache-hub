//path: src\components\react_flow\nodes\buttonOutput.tsx

import ComponentBuilder from "@src/components/builders/ComponentBuilder";
import { ReactFlowHelper } from "@src/utils/reactFlowHelper";
import ButtonAtom from "@src/components/atoms/buttonAtom";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import InputAtom from "@src/components/atoms/inputAtom";
import { NodeData } from "@src/types/nodeData";
import { useAnimation } from "framer-motion";
import withBaseNode from "../core/baseNode";
import React, { useState } from "react";
import { NodeProps } from "reactflow";
import colors from "@src/data/colors";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("space-y-1")
	.withStyle("font-mono")
	.withStyle("flex-col")
	.withStyle("w-64")
	.withStyle("p-2")
	.withRounded()
	.withBg()
	.build();

const ButtonOutput: React.FC<NodeProps> = (props: NodeProps) => {
	const [inputText, setInputText] = useState("");
	const { setNodeFlowValue } = useNodeFlow();
	const flowHelper = new ReactFlowHelper();
	const config = props.data as NodeData;
	const controls = useAnimation();

	const handleHoverStart = () => {
		controls.start({
			color: colors["aqua-title"],
			borderColor: colors["aqua-title"],
		});
	};

	const handleHoverEnd = () => {
		controls.start({
			color: colors["night-title"],
			borderColor: colors["night-light"],
		});
	};

	return (
		<>
			<Root className={flowHelper.updateSelectedState(props.id)}>
				<InputAtom
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
					className="w-full rounded-sm bg-night-black px-2 text-aqua-light ring-1 ring-night-light focus:outline-none focus:ring-aqua-light"
				/>
				<ButtonAtom
					whileTap={{
						scale: 0.97,
						transition: { duration: 0.15, ease: "linear" },
					}}
					animate={controls}
					onHoverStart={handleHoverStart}
					onHoverEnd={handleHoverEnd}
					onClick={() => {
						setNodeFlowValue({
							ids: config.outputs.map((output) => output.id),
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

export default withBaseNode(ButtonOutput);
