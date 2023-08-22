//path: src\components\react_flow\nodes\buttonNode.tsx

import PersistentInput from "@src/components/atoms/persistentInput";
import { BaseNodeProps } from "@src/types/declarations";
import withBaseNode from "../core/baseNode";
import React, { useState } from "react";

const ButtonNode: React.FC<BaseNodeProps> = (props: BaseNodeProps) => {
	const [inputText, setInputText] = useState("");
	return (
		<div className="-n-4 flex-col space-y-2 px-6 pb-6 pt-2">
			<PersistentInput value={inputText} onChange={setInputText} />
			<button
				onClick={() => {
					props.send(inputText);
				}}
				className="w-full rounded bg-blue-500 py-2 text-white"
			>
				Send Output
			</button>
		</div>
	);
};

export default withBaseNode(ButtonNode);
