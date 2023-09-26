//path: src\components\react_flow\utils\drawHandles.tsx

import { PositionId } from "@src/types/nodeData";
import colors from "@src/data/colors";
import { Handle } from "reactflow";

const DrawHandles = (handle: PositionId, keyIndex: number) => {
	return (
		<Handle
			id={handle.id}
			position={handle.position}
			key={keyIndex}
			type={handle.type}
			style={{
				borderColor: colors["night-light"],
				background: colors["night-light"],
			}}
		/>
	);
};

export default DrawHandles;
