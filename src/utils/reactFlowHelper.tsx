//path: src\utils\reactFlowHelper.tsx

import { NodeData, PositionId } from "@src/types/nodeData";
import { Handle, useReactFlow } from "reactflow";
import colors from "@src/data/colors";

export class ReactFlowHelper {
	reactFlowInstance = useReactFlow();

	constructor() {
		this.reactFlowInstance = useReactFlow();
	}

	getFlowInstance = () => {
		return this.reactFlowInstance;
	};

	updateSelectedState = (id: string) => {
		const selectedElements = this.reactFlowInstance
			.getNodes()
			.filter((node) => node.selected);
		const isSelected = selectedElements.some((el) => el.id === id);
		const selectedStyles = isSelected
			? "outline outline-2 outline-aqua-dark"
			: "";
		return selectedStyles;
	};

	makeHandle(config: NodeData, type: string, pos: string, key: number = 0) {
		const inOrOut = type === "source" ? "out" : "in";
		return {
			id: `${inOrOut}_${key}_${config.nodeId}`,
			type: type,
			position: pos,
		} as PositionId;
	}

	makeHandles(type: string, config: NodeData) {
		const handles: PositionId[] = [];
		const positions = ["left", "top", "right", "bottom"];
		positions.forEach((pos, index) => {
			handles.push(this.makeHandle(config, type, pos, index));
		});
		return handles;
	}

	drawHandle(
		handle: PositionId,
		keyIndex: number,
		onOutputConnected: (handle: PositionId) => void,
	) {
		return (
			<Handle
				onConnect={() => {
					if (handle.type === "source" && onOutputConnected) {
						onOutputConnected(handle);
					}
				}}
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
	}
}
