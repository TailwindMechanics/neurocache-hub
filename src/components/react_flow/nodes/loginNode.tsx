//path: src\components\react_flow\nodes\loginNode.tsx

import ComponentBuilder from "@src/components/components/ComponentBuilder";
import { NodeProps, XYPosition, useReactFlow } from "reactflow";
import NodeSelectionState from "../utils/nodeSelectionState";
import ButtonAtom from "@src/components/atoms/buttonAtom";
import { useNodeFlow } from "@src/hooks/nodeFlowContext";
import AtomicDiv from "@src/components/atoms/atomicDiv";
import InputAtom from "@src/components/atoms/inputAtom";
import { NodeData } from "@src/types/nodeData";
import DrawHandle from "../utils/drawHandle";
import { useAnimation } from "framer-motion";
import React, { useState } from "react";
import colors from "@src/data/colors";

const Root = new ComponentBuilder(AtomicDiv)
	.withStyle("font-mono")
	.withStyle("space-y-1")
	.withStyle("flex-col")
	.withStyle("text-xs")
	.withStyle("p-1.5")
	.withStyle("flex")
	.withStyle("h-16")
	.withStyle("w-48")
	.withRounded()
	.withShadow()
	.withBg()
	.build();

const LoginNode: React.FC<NodeProps> = (props: NodeProps) => {
	const [passwordText, setPasswordText] = useState("");
	const [emailText, setEmailText] = useState("");
	const { setNodeFlowValue } = useNodeFlow();
	const reactFlowInstance = useReactFlow();
	const config = props.data as NodeData;
	const controls = useAnimation();

	const thisNode = reactFlowInstance?.getNode(config.nodeId);
	const thisNodeSize: XYPosition = {
		x: thisNode?.width as number,
		y: thisNode?.height as number,
	};
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
			{config.handles?.map((handle, index) =>
				DrawHandle(handle, thisNodeSize, index),
			)}
			<Root className={NodeSelectionState(reactFlowInstance, props.id)}>
				<InputAtom
					value={emailText}
					onChange={(e) => setEmailText(e.target.value)}
					className="h-full w-full rounded-sm bg-night-black px-1 text-center text-aqua-light ring-1 ring-night-light focus:outline-none focus:ring-aqua-light"
				/>
				<InputAtom
					value={passwordText}
					type="password"
					onChange={(e) => setPasswordText(e.target.value)}
					className="h-full w-full rounded-sm bg-night-black px-1 text-center text-aqua-light ring-1 ring-night-light focus:outline-none focus:ring-aqua-light"
				/>
				<ButtonAtom
					className="h-full w-full rounded-b-lg rounded-t-sm border border-night-light bg-night text-night-title "
					whileTap={{
						scale: 0.97,
						transition: { duration: 0.15, ease: "linear" },
					}}
					animate={controls}
					onHoverStart={handleHoverStart}
					onHoverEnd={handleHoverEnd}
					onClick={() => {
						console.log(
							"Email: ",
							emailText,
							"Password",
							passwordText,
						);
					}}
				>
					Login
				</ButtonAtom>
			</Root>
		</>
	);
};

export default LoginNode;
