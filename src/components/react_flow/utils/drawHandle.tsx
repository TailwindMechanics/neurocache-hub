//path: src\components\react_flow\utils\drawHandle.tsx

import { Handle, Position, XYPosition } from "reactflow";
import { PositionId } from "@src/types/nodeData";

const DrawHandle = (
	handle: PositionId,
	parentSize: XYPosition,
	keyIndex: number,
) => {
	const handleOffsetY = (handle.offset.y / 100) * parentSize.y;
	const handleOffsetX = ((handle.offset.x - 50) / 100) * parentSize.x;

	return (
		<Handle
			id={handle.id}
			position={Position.Top}
			key={keyIndex}
			type={handle.type}
			style={{
				border: "#00000000",
				background: "#00000000",
				marginTop: `${handleOffsetY}px`,
				marginLeft: `${handleOffsetX}px`,
			}}
			isConnectable={true}
			isConnectableStart={true}
			isConnectableEnd={true}
		>
			<svg
				style={{
					marginTop: handle.viewMargin?.top || 1,
					marginRight: handle.viewMargin?.right || 0,
					marginBottom: handle.viewMargin?.bottom || 0,
					marginLeft: handle.viewMargin?.left || 0,
				}}
				className={`text-night-dark`}
				viewBox="0 0 100 100"
				stroke="currentColor"
				fill="currentColor"
				pointerEvents={"none"}
			>
				<circle cx="50" cy="50" r="50" />
			</svg>
		</Handle>
	);
};

export default DrawHandle;
