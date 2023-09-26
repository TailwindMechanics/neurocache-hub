//path: src\components\react_flow\utils\drawHandle.tsx

import { PositionId } from "@src/types/nodeData";
import colors from "@src/data/colors";
import { Handle } from "reactflow";

const DrawHandle = (handle: PositionId, keyIndex: number) => {
	return (
		<Handle
			id={handle.id}
			position={handle.position}
			key={keyIndex}
			type={handle.type}
			style={{
				borderColor: colors["night-dark"],
				background: colors["night-dark"],
				marginBottom: handle.offset.y,
				marginLeft: handle.offset.x,
			}}
			isConnectable={true}
			isConnectableStart={true}
			isConnectableEnd={true}
		/>
	);
};

export default DrawHandle;
