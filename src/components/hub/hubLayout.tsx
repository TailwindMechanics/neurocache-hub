//path: src\components\hub\hubLayout.tsx

"use client";

import LeftSideBar from "@/components/hub/leftSideBar";
import MainContent from "@/components/hub/mainContent";
import UICanvas from "@/components/generic/uiCanvas";
import { storesContext, stores } from "@/stores";
import RouteGuard from "../generic/routeGuard";
import Header from "@/components/hub/header";
import Drawer from "../drawer/sideDrawer";
import { FC } from "react";


interface HubLayoutProps {
	headerText: string;
	children?: React.ReactNode;
}

const HubLayout: FC<HubLayoutProps> = ({ headerText, children }) => {
	return <>
		<storesContext.Provider value={stores}>
			<RouteGuard>
				<UICanvas tailwind="w-full flex-col">
					<div className="flex text-text-light h-screen bg-bg">
						<LeftSideBar />
						<div className={`flex flex-col my-10 mx-10 w-full rounded-xl`}>
							<Header text={headerText} />
							<MainContent>
								{children}
							</MainContent>
						</div>
						<Drawer />
					</div>
				</UICanvas>
			</RouteGuard>
		</storesContext.Provider>
	</>
};

export default HubLayout;