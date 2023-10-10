//path: src\modules\hooks\useMouseCoords.tsx

import { useReactFlow } from "reactflow";
import { useRef } from "react";

const useMouseCoords = () => {
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

export default useMouseCoords;
