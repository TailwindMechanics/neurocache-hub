//path: src\modules\ThreeFiber\controllers\freeFlyControls.tsx

"use client";

import { CameraLook, WasdControls } from "..";

interface FreeFlyControlsProps {
	moveSpeed?: number;
	lookSpeed?: number;
}

export function FreeFlyControls({
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
