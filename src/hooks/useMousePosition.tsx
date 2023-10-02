import { useReactFlow } from "reactflow";
import { useRef } from "react";

const useMousePosition = () => {
	const mouseCoordsRef = useRef({ x: 0, y: 0 });
	const reactFlowInstance = useReactFlow();
	const handleMouseMove = (event: React.MouseEvent) => {
		const reactFlowCoords = reactFlowInstance.project({
			x: event.clientX,
			y: event.clientY,
		});

		mouseCoordsRef.current = reactFlowCoords;
	};

	return { mouseCoordsRef, handleMouseMove };
};

export default useMousePosition;
