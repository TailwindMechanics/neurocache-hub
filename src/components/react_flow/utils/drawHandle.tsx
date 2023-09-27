import { PositionId } from "@src/types/nodeData";
import { Handle, Position } from "reactflow";
import colors from "@src/data/colors";

const DrawHandle = (handle: PositionId, keyIndex: number) => {
	const handleRadius = 4;

	return (
		<Handle
			id={handle.id}
			position={Position.Top}
			key={keyIndex}
			type={handle.type}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				borderWidth: 0,
				outlineWidth: 0,
				padding: 0,
				background: "none",
				marginTop: `${handle.offset.y}%`,
				marginLeft: `${handle.offset.x - 50}%`,
			}}
			isConnectable={true}
			isConnectableStart={true}
			isConnectableEnd={true}
		>
			<svg
				className={handle.viewClassname}
				viewBox={`0 0 ${handleRadius * 2} ${handleRadius * 2}`}
				height={handleRadius * 2}
				width={handleRadius * 2}
				pointerEvents={"none"}
			>
				<circle
					cx={handleRadius}
					cy={handleRadius}
					r={handleRadius}
					fill={colors["night-dark"]}
				/>
			</svg>
		</Handle>
	);
};

export default DrawHandle;
