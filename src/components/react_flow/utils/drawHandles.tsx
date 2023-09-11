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
				borderColor:
					handle.type == "target"
						? colors["night-dark"]
						: "#00000000",
				background:
					handle.type == "target"
						? "#00000000"
						: colors["night-dark"],
			}}
		/>
	);
};

export default DrawHandles;
