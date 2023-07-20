//path: src\components\z_deprecated\hub\header.tsx

import { LivePanel } from "@/components/z_deprecated/generic/livePanel";
import UserBadge from "../generic/userBadge";
import { storesContext } from "@/stores";
import { FC, useContext } from "react";
import { observer } from "mobx-react";

interface HeaderProps {
	text: string;
}

const Header: FC<HeaderProps> = observer(({ text }) => {
	const { userStore } = useContext(storesContext);
	const headerText = userStore.isLoggedIn ? text : "Login";

	return (
		<>
			<div className={``}>
				<div className="rounded-xl border border-main-light bg-main-dark p-4 text-center shadow-xl drop-shadow-2xl">
					<LivePanel>
						<h1 className="text-light mb-0 text-2xl font-bold leading-tight tracking-tight">
							{
								headerText
							}
						</h1>
					</LivePanel>
					<UserBadge />
				</div>
			</div>
		</>
	);
});

export default Header;
