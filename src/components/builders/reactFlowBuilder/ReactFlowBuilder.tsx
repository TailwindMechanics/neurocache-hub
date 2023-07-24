//path: src\components\builders\reactFlowBuilder\ReactFlowBuilder.tsx

import { AtomNode, AtomProps } from "@src/types/declarations";
import { Handle, Position, NodeResizer } from "reactflow";
import React from "react";

export default class ReactFlowBuilder {
	private node: AtomNode;
	private includeTopHandle: boolean;
	private includeBottomHandle: boolean;
	private includeResizer: boolean;
	private minWidthResizer: number;
	private minHeightResizer: number;

	constructor(node: AtomNode) {
		this.node = node;
		this.includeTopHandle = false;
		this.includeBottomHandle = false;
		this.includeResizer = false;
		this.minWidthResizer = 100;
		this.minHeightResizer = 30;
	}

	withTopHandle(): ReactFlowBuilder {
		this.includeTopHandle = true;
		return this;
	}

	withBottomHandle(): ReactFlowBuilder {
		this.includeBottomHandle = true;
		return this;
	}

	withResizer(minWidth = 100, minHeight = 30): ReactFlowBuilder {
		this.includeResizer = true;
		this.minWidthResizer = minWidth;
		this.minHeightResizer = minHeight;
		return this;
	}

	generateId() {
		return (
			Date.now().toString(36) + Math.random().toString(36).substring(2)
		);
	}

	build(): AtomNode {
		let uuid = this.generateId();
		return (props: AtomProps) => (
			<>
				{this.includeTopHandle && (
					<Handle type="target" position={Position.Top} />
				)}
				{this.includeResizer && (
					<NodeResizer
						minWidth={this.minWidthResizer}
						minHeight={this.minHeightResizer}
					/>
				)}
				<this.node {...props} />;
				{this.includeBottomHandle && (
					<Handle
						type="source"
						position={Position.Bottom}
						id={uuid}
					/>
				)}
			</>
		);
	}
}
