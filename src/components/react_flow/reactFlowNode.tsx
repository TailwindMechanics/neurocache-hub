//path: src\components\react_flow\reactFlowNode.tsx

import ButtonComponent from "../library/buttonComponent/buttonComponent";
import { LivePanel } from "../z_deprecated/generic/livePanel";
import { Handle, Position, Node } from "reactflow";

type ReactFlowNodeProps = {
	data: Node["data"] & { children?: React.ReactNode };
};

const ReactFlowNode: React.FC<ReactFlowNodeProps> = ({ data }) => {
	return (
		<>
			{/* <NodeResizer minWidth={100} minHeight={30} /> */}
			<Handle type="target" position={Position.Top} />
			<ButtonComponent label={data.label} onClick={onClick} />
			<Handle type="source" position={Position.Bottom} id="a" />
		</>
	);
};

function onClick() {
	console.log("clicked");
}

export default ReactFlowNode;
