//path: src\components\react_flow\core\baseNode.tsx

import { distinctUntilChanged, catchError, filter, EMPTY } from "rxjs";
import ReactFlowBuilder from "../../builders/ReactFlowBuilder";
import { BaseNodeProps } from "@src/types/declarations";
import useNodeFlow from "@src/hooks/useNodeFlow";
import React, { useEffect } from "react";
import { Position } from "reactflow";
import CardAtom from "@src/components/atoms/cardAtom";

function withBaseNode(WrappedComponent: React.FC<BaseNodeProps>) {
	return (props: BaseNodeProps) => {
		const nodeOutputSubject = useNodeFlow();

		useEffect(() => {
			const subscription = nodeOutputSubject
				.pipe(
					filter((data) => data.ids.includes(props.inputId)),
					distinctUntilChanged(
						(prevData, currData) =>
							prevData?.payload === currData?.payload,
					),
					catchError((error) => {
						console.error("Error occurred:", error);
						return EMPTY;
					}),
				)
				.subscribe((data) => {
					console.log(
						`^^^ received: ${props.inputId}, payload: ${data.payload}`,
					);
				});

			return () => {
				subscription.unsubscribe();
			};
		}, [props.inputId, props.outputId]);

		const wrapped: React.FC<BaseNodeProps> = (props) => (
			<CardAtom title={props.data.title} body={props.data.body}>
				<WrappedComponent {...props} />
			</CardAtom>
		);

		const builder = new ReactFlowBuilder(wrapped);
		builder.withType(props.type);

		builder.withHandle({
			id: props.inputId,
			type: "target",
			position: Position.Left,
		});

		builder.withHandle({
			id: props.outputId,
			type: "source",
			position: Position.Right,
		});

		const BuiltComponent = builder.build();
		return <BuiltComponent {...props} />;
	};
}

export default withBaseNode;
