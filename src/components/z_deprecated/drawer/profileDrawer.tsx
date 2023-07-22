//path: src\components\z_deprecated\drawer\profileDrawer.tsx

import { useContext } from "react";
import { storesContext } from "@src/stores";

const ProfileDrawer = () => {
	const { userStore } = useContext(storesContext);

	const handleSignOut = () => {
		userStore.logout();
	};

	return (
		<>
			<div className="w-full px-10 py-2">
				<button
					onClick={handleSignOut}
					className="border-main-light bg-main-dark text-text-dark hover:border-text-dark hover:bg-main-light hover:text-text-light w-full rounded-l border px-4 py-2"
				>
					Sign Out
				</button>
			</div>
		</>
	);
};

export default ProfileDrawer;
