//path: src\components\react_flow\core\baseNode.tsx

import ReactFlowBuilder from "../../builders/ReactFlowBuilder";
import { NodeConfigItem } from "@src/types/declarations";
import CardAtom from "@src/components/atoms/cardAtom";
import { NodeProps, Position } from "reactflow";
import React from "react";

function withBaseNode(WrappedComponent: React.FC<NodeProps>) {
	return (props: NodeProps) => {
		const config = props.data as NodeConfigItem;

		const wrapped: React.FC<NodeProps> = (props) => (
			<CardAtom title={config.title} body={config.body}>
				<WrappedComponent {...props} />
			</CardAtom>
		);

		const builder = new ReactFlowBuilder(wrapped);
		builder.withType(config.node.type);

		builder.withHandle({
			id: config.inputId,
			type: "target",
			position: Position.Left,
		});

		builder.withHandle({
			id: config.outputId,
			type: "source",
			position: Position.Right,
		});

		const BuiltComponent = builder.build();

		return <BuiltComponent {...props} />;
	};
}

export default withBaseNode;
