//path: src\components\generic\userBadge.tsx

import ProfileDrawer from "../drawer/profileDrawer";
import { storesContext } from "@/stores";
import { useContext } from "react";
import { User } from "@/data/icons";
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
			className="rounded-full border border-main-light bg-main-dark p-2 text-sm text-text-dark  shadow-xl drop-shadow-xl hover:border-text-dark hover:bg-main-light hover:text-text-light"
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
