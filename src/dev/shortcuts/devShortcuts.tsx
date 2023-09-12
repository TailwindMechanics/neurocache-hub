//path: src\dev\shortcuts\devShortcuts.tsx

import ClearConsole from "./clearConsole";

const DevShortcuts = () => {
	if (process.env.NODE_ENV !== "development") {
		return <></>;
	}

	return (
		<>
			<ClearConsole />
		</>
	);
};

export default DevShortcuts;
