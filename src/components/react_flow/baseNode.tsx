//path: src\components\react_flow\baseNode.tsx

import ReactFlowBuilder from "../builders/reactFlowBuilder/ReactFlowBuilder";
import { Style } from "@src/types/declarations";
import CardAtom from "../atoms/cardAtom";
import { HandleProps } from "reactflow";

interface BaseNodeProps {
	title: string;
	body: string;
	style?: Style["Category"];
	imageUrl?: string;
	type: string;
	handles: HandleProps[];
}

class BaseNode extends ReactFlowBuilder {
	private props: BaseNodeProps;

	constructor(props: BaseNodeProps) {
		const atom = () => (
			<>
				<CardAtom
					style={props.style ? props.style : "node"}
					title={props.title}
					body={props.body}
					imageUrl={props.imageUrl}
				/>
			</>
		);

		super(atom);
		this.props = props;
	}

	build() {
		this.withType(this.props.type);
		this.props.handles.forEach((handle) => {
			this.withHandle(handle);
		});
		return super.build();
	}
}
export default BaseNode;
