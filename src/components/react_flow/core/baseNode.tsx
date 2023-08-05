//path: src\components\react_flow\core\baseNode.tsx

import ReactFlowBuilder from "../../builders/reactFlowBuilder/ReactFlowBuilder";
import nodeFlowService from "@src/services/NodeFlowService";
import { BaseNodeProps } from "@src/types/declarations";
import CardAtom from "../../atoms/cardAtom";
import { Position } from "reactflow";
import { filter } from "rxjs";

abstract class BaseNode extends ReactFlowBuilder {
	protected props: BaseNodeProps;
	protected inputHandleId: string;
	protected outputHandleId: string;

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

		this.inputHandleId = `${this.props.type}_${this.generateId()}`;
		this.outputHandleId = `${this.props.type}_${this.generateId()}`;

		nodeFlowService.nodeEmitted
			.pipe(filter((tuple) => this.inputValid(tuple.ids)))
			.subscribe((tuple) => {
				this.receivedInput(tuple.payload);
			});
	}

	inputValid(ids: string[]) {
		let result = this.inputHandleId && ids.includes(this.inputHandleId);

		return result === true ? true : false;
	}

	protected receivedInput(payload: string) {
		console.log(
			`^=== received input: ${this.inputHandleId}, payload: ${payload}`,
		);
	}

	protected sendOutput(payload: string) {
		if (this.outputHandleId) {
			console.log(
				`v=== sending output: id: ${this.outputHandleId}, payload: ${payload}`,
			);
			nodeFlowService.onNodeOutput(this.outputHandleId, payload);
		}
	}

	renderCustomContent(content = <></>) {
		return content;
	}

	build() {
		this.withType(this.props.type);
		this.withHandle({
			id: this.inputHandleId,
			type: "target",
			position: Position.Left,
		});
		this.withHandle({
			id: this.outputHandleId,
			type: "source",
			position: Position.Right,
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
