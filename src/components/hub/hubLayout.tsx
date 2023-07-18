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
	return (
		<>
			<storesContext.Provider value={stores}>
				<RouteGuard>
					<UICanvas tailwind="w-full flex-col">
						<div className="flex h-screen bg-bg text-text-light">
							<LeftSideBar />
							<div
								className={`mx-10 my-10 flex w-full flex-col rounded-xl`}
							>
								<Header
									text={
										headerText
									}
								/>
								<MainContent>
									{
										children
									}
								</MainContent>
							</div>
							<Drawer />
						</div>
					</UICanvas>
				</RouteGuard>
			</storesContext.Provider>
		</>
	);
};

export default HubLayout;
