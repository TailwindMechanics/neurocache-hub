//path: src\components\builders\reactFlowBuilder\ReactFlowBuilder.tsx

import { Handle, Position, NodeResizer, Node, HandleProps } from "reactflow";
import { AtomProps, AtomNode } from "@src/types/declarations";
import React from "react";

export default class ReactFlowBuilder {
	private minHeightResizer: number;
	private minWidthResizer: number;
	private includeResizer: boolean;
	private atomData: AtomNode;
	private flowData: Node;
	private handles: HandleProps[] = [];

	constructor(node: AtomNode) {
		this.includeResizer = false;
		this.minWidthResizer = 100;
		this.minHeightResizer = 30;
		this.atomData = node;

		this.flowData = {
			id: this.generateId(),
			type: "custom",
			position: { x: 0, y: 0 },
			data: { label: "label" },
			width: 40,
			height: 30,
		};
	}

	withLabel(label: string): ReactFlowBuilder {
		this.flowData.data.label = label;
		return this;
	}

	withNoLabel(): ReactFlowBuilder {
		this.flowData.data.label = null;
		return this;
	}

	withHandle(props: HandleProps) {
		this.handles.push(props);
		return this;
	}

	withPosition(x: number, y: number): ReactFlowBuilder {
		this.flowData.position = { x: x, y: y };
		return this;
	}

	withType(type: string): ReactFlowBuilder {
		this.flowData.type = type;
		return this;
	}

	withResizer(minWidth = 40, minHeight = 30): ReactFlowBuilder {
		this.includeResizer = true;
		this.minWidthResizer = minWidth;
		this.minHeightResizer = minHeight;

		this.flowData.expandParent = true;
		this.flowData.width = minWidth;
		this.flowData.height = minHeight;

		return this;
	}

	generateId() {
		return (
			Date.now().toString(36) + Math.random().toString(36).substring(2)
		);
	}

	node(): Node {
		return this.flowData;
	}

	build(): AtomNode {
		let uuid = this.generateId();
		const Atom = this.atomData;
		return (props: AtomProps) => (
			<>
				{this.handles.map((handle) => (
					<Handle {...handle} />
				))}
				{this.includeResizer && (
					<NodeResizer
						minWidth={this.minWidthResizer}
						minHeight={this.minHeightResizer}
					/>
				)}
				<Atom {...props} />
			</>
		);
	}
}
