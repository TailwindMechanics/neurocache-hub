//path: src\modules\DevTools\devShortcuts.tsx

import Dev from ".";

const DevShortcuts = () => {
	if (process.env.NODE_ENV !== "development") {
		return <></>;
	}

	return (
		<>
			<Dev.ClearConsole />
		</>
	);
};

export default DevShortcuts;
