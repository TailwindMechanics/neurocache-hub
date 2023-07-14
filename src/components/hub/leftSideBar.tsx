//path: src\components\hub\leftSideBar.tsx

"use client"

import { LivePanel } from '@/components/generic/livePanel'
import { Divider } from '@/components/generic/divider'
import { usePathname } from 'next/navigation';
import Content from "@/data/content.json";
import { storesContext } from '@/stores';
import { FC, useContext } from 'react';
import { observer } from 'mobx-react';
import MenuItem from './menuItem';


const LeftSidebar: FC = observer(() => {
	const { sidebarStore } = useContext(storesContext);
	const pathName = usePathname();

	return <>
		<div className={`flex-col w-1/6 my-10 ml-10 shadow-2xl drop-shadow-2xl border bg-main-dark rounded-xl border-main-light`}>
			<LivePanel tailwind=''>
				<h1 className={`px-2 pt-3 justify-center flex text-3xl font-bold text-text-light`}>{Content.Neurocache}</h1>
				<Divider tailwind='mt-2 mb-0 bg-main-light' />
			</LivePanel>
			<div className='py-5'></div>
			<div className="p-0 m-0 flex-grow menu">
				<ul className="p-0 m-0 flex-grow menu">
					{sidebarStore.currentRoutes.map((route, index) => (
						<MenuItem
							key={index}
							path={route.path}
							label={route.name}
							icon={<route.icon />}
							active={route.isActive(pathName)}
						/>
					))}
				</ul>
			</div>
		</div>
	</>
});

export default LeftSidebar;