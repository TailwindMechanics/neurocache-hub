//path: src\components\react_flow\nodes\labelNode.tsx

import { BaseNodeProps } from "@src/types/declarations";
import React, { useState, useEffect } from "react";
import withBaseNode from "../core/baseNode";

const LabelNode: React.FC<BaseNodeProps> = (props: BaseNodeProps) => {
	const [receivedInputText, setReceivedInputText] = useState("");

	const receivedInput = (payload: string) => {
		console.log("Received input in LabelNode:", payload);
		// You might need to call any inherited methods or additional logic here
		setReceivedInputText(payload);
	};

	useEffect(() => {
		// Add any side-effects or logic that should run when the component mounts here
		// This is analogous to the `componentDidMount` lifecycle method in class components

		return () => {
			// This is analogous to the `componentWillUnmount` lifecycle method in class components
			// Add any cleanup logic here
		};
	}, []);

	return (
		<div className="space-y-2 px-6 pb-6 pt-2">
			<p className="text-gray-700">Received input: {receivedInputText}</p>
		</div>
	);
};

export default withBaseNode(LabelNode);
