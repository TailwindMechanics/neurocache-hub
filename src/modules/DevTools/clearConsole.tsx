//path: src\modules\DevTools\clearConsole.tsx

import { useEffect } from "react";

const ClearConsole = () => {
	useEffect(() => {
		const handleKeydown = (e: KeyboardEvent) => {
			if (e.ctrlKey && e.altKey && e.key === "c") {
				e.preventDefault();
				console.clear();
			}
		};

		document.addEventListener("keydown", handleKeydown);

		return () => {
			document.removeEventListener("keydown", handleKeydown);
		};
	}, []);

	return <></>;
};

export default ClearConsole;
