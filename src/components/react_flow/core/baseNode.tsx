//path: src\components\react_flow\core\baseNode.tsx

import { distinctUntilChanged, catchError, filter, EMPTY } from "rxjs";
import ReactFlowBuilder from "../../builders/ReactFlowBuilder";
import { BaseNodeProps } from "@src/types/declarations";
import { useNodeFlow } from "./reactFlowCanvas";
import React, { useEffect } from "react";
import { Position } from "reactflow";

function withBaseNode(WrappedComponent: React.FC<BaseNodeProps>) {
	return (props: BaseNodeProps) => {
		const nodeOutputSubject = useNodeFlow();

		useEffect(() => {
			const subscription = nodeOutputSubject
				.pipe(
					filter((data) => inputValid(data.ids)),
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

		const build = () => {
			const builder = new ReactFlowBuilder(WrappedComponent);
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

			return builder.build();
		};

		const inputValid = (ids: string[]) => {
			return ids.includes(props.inputId);
		};

		const BuiltComponent = build();
		return <BuiltComponent {...props} />;
	};
}

export default withBaseNode;
