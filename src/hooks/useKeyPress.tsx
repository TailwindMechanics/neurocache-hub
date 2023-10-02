import { useEffect } from "react";

const useKeyPress = (targetKey: string, callback: () => void) => {
	useEffect(() => {
		const keys = targetKey.toLowerCase().split("_");
		const downKeys = new Set();

		const handleKeyDown = (event: KeyboardEvent) => {
			downKeys.add(event.key.toLowerCase());

			if (keys.every((k) => downKeys.has(k))) {
				event.preventDefault();
				console.log(`Key down: ${event.key}`);
				callback();
			}
		};

		const handleKeyUp = ({ key }: KeyboardEvent) => {
			downKeys.delete(key.toLowerCase());
		};

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [targetKey, callback]);
};

export default useKeyPress;
