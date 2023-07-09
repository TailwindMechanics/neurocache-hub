//path: src\components\hub\leftSideBar.tsx

"use client"

import { LivePanel } from '@/components/generic/livePanel'
import { Divider } from '@/components/generic/divider'
import SideMenu from '@/components/hub/sideMenu'
import Content from "@/data/content.json";
import { useRouter } from 'next/router';
import { FC } from 'react'


interface LeftSideBarProps {

}

const LeftSideBar: FC<LeftSideBarProps> = ({ }) => {
    const router = useRouter();

  // Ensure router is ready before accessing its properties
  if (!router.isReady) {
    return null;  // or return a loading spinner
  }
    return <>
        <div className={`flex-col w-1/6 my-10 ml-10 shadow-2xl drop-shadow-2xl border bg-main-dark rounded-xl border-main-light`}>
            <LivePanel tailwind=''>
                <h1 className={`px-2 pt-3 justify-center flex text-3xl font-bold text-text-light`}>{Content.Neurocache}</h1>
                <Divider tailwind='mt-2 mb-0 bg-main-light' />
            </LivePanel>
            <div className='py-5'></div>
            <SideMenu />
        </div>
    </>
}

export default LeftSideBar