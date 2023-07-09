//path: src\app\hub\hubLayout.tsx

"use client"

import LoggedInRedirect from '@/components/generic/loggedInRedirect';
import SignedInBadge from '@/components/generic/signedInBadge';
import { useDispatch, useSelector } from 'react-redux';
import LeftSideBar from '@/components/hub/leftSideBar';
import MainContent from '@/components/hub/mainContent';
import UICanvas from '@/components/generic/uiCanvas';
import { closeDrawer } from '@/store/hubSlice';
import Drawer from '@/components/hub/drawer';
import Header from '@/components/hub/header';
import { AppState } from '@/appState';
import { FC, useEffect } from 'react';


interface HubLayoutProps {
    headerText: string
    children?: React.ReactNode;
}

const HubLayout: FC<HubLayoutProps> = ({ headerText, children }) => {
    const dispatch = useDispatch();
    const { isOpen, content } = useSelector((state: AppState) => state.hub);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                dispatch(closeDrawer());
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [dispatch, isOpen]);

    return <>
        <LoggedInRedirect>
            <UICanvas tailwind="w-full flex-col">
                <div className="flex text-text-light h-screen bg-bg">
                    <LeftSideBar />
                    <div className={`flex flex-col my-10 mx-10 w-full rounded-xl`}>
                        <Header text={headerText} />
                        <MainContent>
                            {children}
                        </MainContent>
                    </div>
                    <Drawer isOpen={isOpen} onClose={() => dispatch(closeDrawer())}></Drawer>
                </div>
                <SignedInBadge />
            </UICanvas>
        </LoggedInRedirect>
    </>
}

export default HubLayout;