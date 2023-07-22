//path: src\components\z_deprecated\hub\leftSideBar.tsx

"use client";

import { LivePanel } from "@src/components/z_deprecated/generic/livePanel";
import { Divider } from "@src/components/z_deprecated/generic/divider";
import { usePathname } from "next/navigation";
import Content from "@src/data/content.json";
import { storesContext } from "@src/stores";
import { FC, useContext } from "react";
import { observer } from "mobx-react";
import MenuItem from "./menuItem";

const LeftSidebar: FC = observer(() => {
	const { sidebarStore } = useContext(storesContext);
	const pathName = usePathname();

	return (
		<>
			<div
				className={`border-main-light bg-main-dark my-10 ml-10 w-1/6 flex-col rounded-xl border shadow-2xl drop-shadow-2xl`}
			>
				<LivePanel tailwind="">
					<h1
						className={`text-text-light flex justify-center px-2 pt-3 text-3xl font-bold`}
					>
						{Content.Neurocache}
					</h1>
					<Divider tailwind="mt-2 mb-0 bg-main-light" />
				</LivePanel>
				<div className="py-5"></div>
				<div className="menu m-0 flex-grow p-0">
					<ul className="menu m-0 flex-grow p-0">
						{sidebarStore.currentRoutes.map(
							(
								route,
								index,
							) => (
								<MenuItem
									key={
										index
									}
									path={
										route.path
									}
									label={
										route.name
									}
									icon={
										<route.icon />
									}
									active={route.isActive(
										pathName,
									)}
								/>
							),
						)}
					</ul>
				</div>
			</div>
		</>
	);
});

export default LeftSidebar;
