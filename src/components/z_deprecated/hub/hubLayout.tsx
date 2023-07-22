//path: src\components\z_deprecated\hub\hubLayout.tsx

"use client";

import LeftSideBar from "@src/components/z_deprecated/hub/leftSideBar";
import MainContent from "@src/components/z_deprecated/hub/mainContent";
import UICanvas from "@src/components/z_deprecated/generic/uiCanvas";
import { storesContext, stores } from "@src/stores";
import RouteGuard from "../generic/routeGuard";
import Header from "@src/components/z_deprecated/hub/header";
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
						<div className="bg-bg text-text-light flex h-screen">
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
