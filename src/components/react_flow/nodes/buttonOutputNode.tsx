//path: src\components\react_flow\nodes\buttonOutputNode.tsx

import BaseNode, { BaseNodeProps } from "../core/baseNode";
import { IsNullOrEmpty } from "@src/utils/stringUtils";
import React, { useState } from "react";

class ButtonOutputNode extends BaseNode {
	state = { inputText: "" };

	constructor(props: BaseNodeProps) {
		super(props);
	}

	protected receivedInput(payload: string): void {
		super.receivedInput(payload);
	}

	renderCustomContent() {
		const CustomContent: React.FC = () => {
			const [inputText, setInputText] = useState("");

			const handleSendOutput = () => {
				if (IsNullOrEmpty(inputText)) return;

				this.sendOutput(inputText);
			};

			const handleInputChange = (
				event: React.ChangeEvent<HTMLInputElement>,
			) => {
				setInputText(event.target.value);
			};

			return (
				<div className="space-y-2 p-4">
					<input
						type="text"
						className="w-full rounded border border-gray-300"
						value={inputText}
						placeholder="Enter payload"
						onChange={handleInputChange}
					/>
					<button
						onClick={handleSendOutput}
						className="rounded bg-blue-500 px-4 py-2 text-white"
					>
						Send Output
					</button>
				</div>
			);
		};

		return <CustomContent />;
	}

	build() {
		this.withLabel;
		return super.build();
	}
}

export default ButtonOutputNode;
