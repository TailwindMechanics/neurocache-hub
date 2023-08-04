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
				<div className="-n-4 flex-col space-y-2 px-6 pb-6 pt-2">
					<input
						type="text"
						className="w-full rounded border border-gray-300"
						value={inputText}
						placeholder="Enter payload"
						onChange={handleInputChange}
					/>
					<button
						onClick={handleSendOutput}
						className="w-full rounded bg-blue-500 py-2 text-white"
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
