//path: src\components\hub\menuItem.tsx

"use client";

import { LivePanel } from "@/components/generic/livePanel";
import { FC, ReactElement } from "react";
import Link from "next/link";

interface MenuItemProps {
	label: string;
	icon: ReactElement;
	path: string;
	active: boolean;
}

const MenuItem: FC<MenuItemProps> = ({ label, icon, path, active = false }) => {
	return (
		<>
			<div className="flex-grow">
				<LivePanel>
					<div className="flex-grow">
						<Link href={path}>
							<div
								className={`flex w-full items-center justify-start border border-main-light p-2 text-text-dark ${
									active
										? "bg-main-light text-text-light"
										: "hover:bg-main-light hover:text-text-light"
								}`}
							>
								<span className="mr-2 h-5 w-5">
									{
										icon
									}
								</span>
								{
									label
								}
							</div>
						</Link>
					</div>
				</LivePanel>
			</div>
		</>
	);
};

export default MenuItem;
