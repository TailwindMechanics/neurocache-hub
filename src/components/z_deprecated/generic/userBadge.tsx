//path: src\components\z_deprecated\generic\userBadge.tsx

import ProfileDrawer from "../drawer/profileDrawer";
import { storesContext } from "@src/stores";
import { useContext } from "react";
import { User } from "@src/data/icons";
import Image from "next/image";

export default function UserBadge() {
	const { userStore, drawerStore } = useContext(storesContext);

	if (!userStore.user) {
		return null;
	}

	const initials =
		userStore.user.first_name && userStore.user.last_name ? (
			`${userStore.user.first_name[0]}${userStore.user.last_name[0]}`
		) : (
			<User />
		);

	const handleClick = () => {
		drawerStore.open(<ProfileDrawer />);
	};

	return (
		<button
			onClick={handleClick}
			className="border-main-light bg-main-dark text-text-dark hover:border-text-dark hover:bg-main-light hover:text-text-light rounded-full  border p-2 text-sm shadow-xl drop-shadow-xl"
			style={{
				position: "fixed",
				right: "0.5rem",
				top: "0.5rem",
			}}
		>
			{userStore.user.avatar_url ? (
				<Image
					src={
						userStore.user
							.avatar_url
					}
					alt="User avatar"
					className="h-8 w-8 rounded-full"
				/>
			) : (
				initials
			)}
		</button>
	);
}
