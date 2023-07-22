//path: src\components\threejs\controllers\freeFlyControls.tsx

"use client";

import WasdControls from "../generic/wasdControls";
import CameraLook from "./cameraLook";

interface FreeFlyControlsProps {
	moveSpeed?: number;
	lookSpeed?: number;
}

export default function FreeFlyControls({
	moveSpeed = 1,
	lookSpeed = 1,
}: FreeFlyControlsProps) {
	return (
		<>
			<CameraLook speed={lookSpeed} />
			<WasdControls speed={moveSpeed} />
		</>
	);
}
