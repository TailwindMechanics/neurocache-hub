//path: src\components\react_flow\core\spacebarCapture.tsx

import React, { useEffect, useCallback, useState } from "react";

interface SpacebarCaptureProps {
	onSpacebarPress: () => void;
}

const SpacebarCapture: React.FC<SpacebarCaptureProps> = (props) => {
	const [spacebarPressed, setSpacebarPressed] = useState(false);

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === " " && !spacebarPressed) {
				event.preventDefault();
				setSpacebarPressed(true);
				props.onSpacebarPress();
			}
		},
		[spacebarPressed],
	);

	const handleKeyUp = useCallback((event: KeyboardEvent) => {
		if (event.key === " ") {
			setSpacebarPressed(false);
		}
	}, []);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [handleKeyDown, handleKeyUp]);

	return <></>;
};

export default SpacebarCapture;
