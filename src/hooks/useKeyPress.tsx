//path: src\hooks\useKeyPress.tsx

import { useEffect } from "react";

const useKeyPress = (targetKey: string, callback: () => void) => {
	const keyPressHandler = (e: KeyboardEvent) => {
		if (e.code === targetKey) {
			callback();
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", keyPressHandler);
		return () => {
			window.removeEventListener("keydown", keyPressHandler);
		};
	}, [targetKey, callback]);
};

export default useKeyPress;
