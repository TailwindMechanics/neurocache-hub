//path: src\app\hub\dashboard\dashboard.tsx

import { LivePanel } from '@/app/components/generic/react/livePanel';
import { Divider } from '@/app/components/generic/react/divider';
import { useDispatch, useSelector } from 'react-redux';
import Content from "src/app/data/content.json";
import { closeDrawer } from './dashboardSlice';
import Welcome from './(welcome)/welcome';
import { AppState } from '@/appState';
import SideMenu from './sideMenu';
import Drawer from './drawer';


const Dashboard = () => {
    const dispatch = useDispatch();
    const { isOpen, content } = useSelector((state: AppState) => state.dashboard);

    const gap = "10";

    return <>
        <div className="flex text-text h-screen bg-background">
            <div className={`w-1/6 my-${gap} ml-${gap} shadow-xl drop-shadow-xl border bg-primary rounded-xl border-secondary`}>
                <LivePanel tailwind="mt-28">
                    <Divider />
                    <h1 className={`mb-1 overflow-auto justify-center flex text-3xl font-bold text-text`}>{Content.Neurocache}</h1>
                    <Divider />
                    <SideMenu />
                </LivePanel>
            </div>

            <div className={`my-${gap} mx-${gap} flex flex-col w-full rounded-xl`}>
                <div className={``}>
                    <div className="shadow-xl drop-shadow-xl text-center rounded-xl p-4 border bg-primary border-secondary">
                        <LivePanel>
                            Header
                        </LivePanel>
                    </div>
                </div>
                <div className={`mt-${gap} shadow-xl drop-shadow-xl rounded-xl border p-4 bg-primary border-secondary flex-grow`}>
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