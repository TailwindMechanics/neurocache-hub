//path: src\components\react_flow\nodes\displayInputNode.tsx

import BaseNode, { BaseNodeProps } from "../core/baseNode";
import React, { useState } from "react";

class DisplayInputNode extends BaseNode {
	private receivedInputText: string = "";

	constructor(props: BaseNodeProps) {
		super(props);
	}

	protected receivedInput(payload: string): void {
		super.receivedInput(payload);
		this.receivedInputText = payload;
		this.onReceivedInput(payload);
	}

	private onReceivedInput: (payload: string) => void = () => {};

	renderCustomContent() {
		return (
			<div className="space-y-2 px-6 pb-6 pt-2">
				<p className="text-gray-700">
					Received input: {this.receivedInputText}
				</p>
			</div>
		);
	}

	build() {
		const AtomNode = super.build();
		return (props: any) => {
			const [receivedInputText, setReceivedInputText] = useState("");
			this.onReceivedInput = setReceivedInputText;

			return (
				<AtomNode {...props} receivedInputText={receivedInputText} />
			);
		};
	}
}

export default DisplayInputNode;
