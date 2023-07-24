//path: src\components\builders\reactFlowBuilder\ReactFlowBuilder.tsx

import {
	AtomNode,
	AtomProps,
	ReactFlowNode,
	ReactFlowNodeProps,
} from "@src/types/declarations";
import { Handle, Position, NodeResizer, Node } from "reactflow";
import React from "react";
import { flow } from "mobx";

export default class ReactFlowBuilder {
	private atomData: AtomNode;
	private flowData: Node;

	private includeBottomHandle: boolean;
	private includeTopHandle: boolean;
	private minHeightResizer: number;
	private minWidthResizer: number;
	private includeResizer: boolean;

	constructor(node: AtomNode) {
		this.atomData = node;

		this.flowData = {
			id: this.generateId(),
			type: "custom",
			position: { x: 0, y: 0 },
			data: { label: "label" },
		};

		this.includeTopHandle = false;
		this.includeBottomHandle = false;
		this.includeResizer = false;
		this.minWidthResizer = 100;
		this.minHeightResizer = 30;
	}

	withPosition(x: number, y: number): ReactFlowBuilder {
		this.flowData.position = { x: x, y: y };
		return this;
	}

	withType(type: string): ReactFlowBuilder {
		this.flowData.type = type;
		return this;
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

	withLabel(label: string): ReactFlowBuilder {
		this.flowData.data = { label: label };
		return this;
	}

	generateId() {
		return (
			Date.now().toString(36) + Math.random().toString(36).substring(2)
		);
	}

	buildAtomNode(): AtomNode {
		let uuid = this.generateId();
		const Atom = this.atomData;
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
				<Atom {...props}>{this.flowData.data.label}</Atom>;
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

	build(): ReactFlowNodeProps {
		return {
			data: this.flowData,
			atom: this.buildAtomNode(),
		};
	}
}
