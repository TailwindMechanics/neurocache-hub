//path: src\components\hub\hubLayout.tsx

"use client"

import LoggedInRedirect from '@/components/generic/loggedInRedirect';
import SignedInBadge from '@/components/generic/signedInBadge';
import LeftSideBar from '@/components/hub/leftSideBar';
import MainContent from '@/components/hub/mainContent';
import UICanvas from '@/components/generic/uiCanvas';
import Drawer from '@/components/hub/drawer';
import Header from '@/components/hub/header';
import { FC } from 'react';
import ThreeCanvas from '@/threeComponents/threeCanvas';
import CityBackground from '@/threeComponents/virtualBackground/cityBackground';


interface HubLayoutProps {
    headerText: string
    children?: React.ReactNode;
}

const HubLayout: FC<HubLayoutProps> = ({ headerText, children }) => {
    return <>
        <UICanvas tailwind="w-full flex-col">
            <div className="flex text-text-light h-screen bg-bg">
                <LeftSideBar />
                <div className={`flex flex-col my-10 mx-10 w-full rounded-xl`}>
                    <Header text={headerText} />
                    <MainContent>
                        {children}
                    </MainContent>
                </div>
                {/* <Drawer isOpen={isOpen} onClose={() => dispatch(closeDrawer())}></Drawer> */}
            </div>
            <SignedInBadge />
        </UICanvas>
    </>
}

export default HubLayout;