//path: src\components\react_flow\core\baseNode.tsx

import ReactFlowBuilder from "../../builders/reactFlowBuilder/ReactFlowBuilder";
import flowService from "@services/FlowService";
import CardAtom from "../../atoms/cardAtom";
import { Position } from "reactflow";
import { filter } from "rxjs";

export interface BaseNodeProps {
	outputHandleId?: string;
	inputHandleId?: string;
	debugOutputId?: string;
	debugInputId?: string;
	imageUrl?: string;
	title: string;
	body: string;
	type: string;
}

abstract class BaseNode extends ReactFlowBuilder {
	protected props: BaseNodeProps;

	constructor(props: BaseNodeProps) {
		const atom = () => (
			<>
				<CardAtom
					title={props.title}
					body={props.body}
					imageUrl={props.imageUrl}
					children={this.renderCustomContent()}
				/>
			</>
		);

		super(atom);
		this.props = props;

		flowService.nodeEmitted
			.pipe(filter((tuple) => this.inputValid(tuple.ids)))
			.subscribe((tuple) => {
				this.receivedInput(tuple.payload);
			});
	}

	inputValid(ids: string[]) {
		let result =
			this.props.inputHandleId && ids.includes(this.props.inputHandleId);
		if (!result) {
			result =
				this.props.debugInputId &&
				ids.includes(this.props.debugInputId);
		}

		return result === true ? true : false;
	}

	protected receivedInput(payload: string) {
		console.log(
			`^=== received input: ${this.props.inputHandleId}, payload: ${payload}`,
		);
	}

	protected sendOutput(payload: string, debugPayload?: string) {
		if (this.props.outputHandleId) {
			console.log(
				`v=== sending output: id: ${this.props.outputHandleId}, payload: ${payload}`,
			);
			flowService.onNodeOutput(this.props.outputHandleId, payload);
		}

		if (debugPayload && this.props.debugOutputId) {
			flowService.onNodeOutput(this.props.debugOutputId, payload);
		}
	}

	renderCustomContent(content = <></>) {
		return content;
	}

	build() {
		this.withType(this.props.type);
		this.withHandle({
			id: this.props.inputHandleId,
			type: "target",
			position: Position.Left,
		});
		this.withHandle({
			id: this.props.outputHandleId,
			type: "source",
			position: Position.Right,
		});
		this.withHandle({
			id: this.props.debugInputId,
			type: "target",
			position: Position.Top,
		});
		this.withHandle({
			id: this.props.debugOutputId,
			type: "source",
			position: Position.Bottom,
		});

		return super.build();
	}

	generateId() {
		return (
			Date.now().toString(36) + Math.random().toString(36).substring(2)
		);
	}
}
export default BaseNode;
