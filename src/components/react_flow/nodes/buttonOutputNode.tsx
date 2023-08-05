//path: src\components\react_flow\nodes\buttonOutputNode.tsx

import PersistentInput from "@src/components/atoms/persistentInput";
import BaseNode, { BaseNodeProps } from "../core/baseNode";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import React, { useState } from "react";

class ButtonOutputNode extends BaseNode {
	constructor(props: BaseNodeProps) {
		super(props);
	}

	protected receivedInput(payload: string): void {
		super.receivedInput(payload);
	}

	renderCustomContent() {
		const [inputText, setInputText] = useState("");

		const handleSendOutput = () => {
			if (IsNullOrEmpty(inputText)) return;

			this.sendOutput(inputText);
		};

		return (
			<div className="-n-4 flex-col space-y-2 px-6 pb-6 pt-2">
				<PersistentInput value={inputText} onChange={setInputText} />
				<button
					onClick={handleSendOutput}
					className="w-full rounded bg-blue-500 py-2 text-white"
				>
					Send Output
				</button>
			</div>
		);
	}

	build() {
		this.withLabel;
		return super.build();
	}
}

export default ButtonOutputNode;
