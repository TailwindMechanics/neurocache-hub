//path: src\app\features\dashboard\dashboard.tsx

import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon';
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon';
import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon';
import { showNotification } from '@/app/features/common/headerSlice';
import UsersIcon from '@heroicons/react/24/outline/UsersIcon';
import AmountStats from '../../components/AmountStats';
import { useDispatch } from 'react-redux';
import BarChart from '@/app/components/BarChart';
import DashboardStats from '@/app/components/DashboardStats';
import DashboardTopBar from '@/app/components/DashboardTopBar';
import DoughnutChart from '@/app/components/DoughnutChart';
import LineChart from '@/app/components/LineChart';
import PageStats from '@/app/components/PageStats';
import UserChannels from '@/app/components/UserChannels';


interface Stat {
    title: string;
    value: string;
    icon: JSX.Element;
    description: string;
}

interface PeriodRange {
    startDate: Date;
    endDate: Date;
}

const statsData: Stat[] = [
    { title: "New Users", value: "34.7k", icon: <UserGroupIcon className='w-8 h-8' />, description: "↗︎ 2300 (22%)" },
    { title: "Total Sales", value: "$34,545", icon: <CreditCardIcon className='w-8 h-8' />, description: "Current month" },
    { title: "Pending Leads", value: "450", icon: <CircleStackIcon className='w-8 h-8' />, description: "50 in hot leads" },
    { title: "Active Users", value: "5.6k", icon: <UsersIcon className='w-8 h-8' />, description: "↙ 300 (18%)" },
]

function Dashboard() {
    const dispatch = useDispatch();

    const updateDashboardPeriod = (newRange: PeriodRange): void => {
        // Dashboard range changed, write code to refresh your values
        dispatch(
            showNotification({
                message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
                status: 1,
            })
        );
    };


    return (
        <>
            {/** ---------------------- Select Period Content ------------------------- */}
            <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />

            {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k} />
                        )
                    })
                }
            </div>



            {/** ---------------------- Different charts ------------------------- */}
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <LineChart />
                <BarChart />
            </div>

            {/** ---------------------- Different stats content 2 ------------------------- */}

            <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
                <AmountStats />
                <PageStats />
            </div>

            {/** ---------------------- User source channels table  ------------------------- */}

            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <UserChannels />
                <DoughnutChart />
            </div>
        </>
    )
}

export default Dashboard