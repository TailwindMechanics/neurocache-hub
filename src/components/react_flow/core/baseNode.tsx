//path: src\components\react_flow\core\baseNode.tsx

import ReactFlowBuilder from "../../builders/ReactFlowBuilder";
import CardAtom from "@src/components/atoms/cardAtom";
import { NodeData } from "@src/types/nodeData";
import { NodeProps } from "reactflow";
import React from "react";

function withBaseNode(WrappedComponent: React.FC<NodeProps>) {
	return (props: NodeProps) => {
		const config = props.data as NodeData;
		const wrapped: React.FC<NodeProps> = (props) => (
			<CardAtom title={config.nodeName} body={config.body}>
				<WrappedComponent {...props} />
			</CardAtom>
		);

		const builder = new ReactFlowBuilder(wrapped);
		builder.withType(config.nodeType);

		config.handles?.forEach((tuple) => {
			builder.withHandle({
				id: tuple.id,
				type: tuple.type,
				position: tuple.position,
			});
		});

		const BuiltComponent = builder.build();
		return <BuiltComponent {...props} />;
	};
}

export default withBaseNode;
