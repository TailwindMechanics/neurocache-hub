//path: src\app\hub\dashboard\dashboard.tsx

import { LivePanel } from '@/app/components/generic/react/livePanel';
import { Divider } from '@/app/components/generic/react/divider';
import { useDispatch, useSelector } from 'react-redux';
import Content from "src/app/data/content.json";
import { closeDrawer } from './dashboardSlice';
import Welcome from './(welcome)/welcome';
import { AppState } from '@/appState';
import { useEffect } from 'react';
import SideMenu from './sideMenu';
import Drawer from './drawer';


const Dashboard = () => {
    const dispatch = useDispatch();
    const { isOpen, content } = useSelector((state: AppState) => state.dashboard);

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
        <div className="flex text-text-light h-screen bg-bg">
            <div className={`flex-col w-1/6 my-10 ml-10 shadow-2xl drop-shadow-2xl border bg-main-dark rounded-xl border-main-light`}>
                <LivePanel tailwind=''>
                        <h1 className={`px-2 pt-3 justify-center flex text-3xl font-bold text-text-light`}>{Content.Neurocache}</h1>
                        <Divider tailwind='mt-2 mb-0 bg-main-light' />
                </LivePanel>
                <div className='py-5'></div>
                    <SideMenu />
            </div>

            <div className={`flex flex-col my-10 mx-10 w-full rounded-xl`}>
                <div className={``}>
                    <div className="shadow-xl drop-shadow-2xl text-center rounded-xl p-4 border bg-main-dark border-main-light">
                        <LivePanel>
                            Header
                        </LivePanel>
                    </div>
                </div>
                <div className={`mt-10 shadow-2xl drop-shadow-2xl rounded-xl border p-4 bg-main-dark border-main-light flex-grow`}>
                    <LivePanel>
                        <Welcome />
                    </LivePanel>
                </div>
            </div>
 
            <Drawer isOpen={isOpen} onClose={() => dispatch(closeDrawer())}>
                {content}
            </Drawer>
        </div>
    </>
}

export default Dashboard;