//path: src\app\hub\dashboard\(welcome)\welcome.tsx

import { LivePanel } from '@/app/components/generic/react/livePanel';
import { Btn } from '@/app/components/generic/react/btn'
import { openDrawer } from '../dashboardSlice';
import { useDispatch } from 'react-redux';
import { FC } from 'react'
import WelcomeDrawer from './welcomeDrawer';


const Welcome: FC = () => {
    const dispatch = useDispatch();

    return <>
        <div className="flex flex-col rounded-xl gap-2 h-full items-stretch text-center">
            <a>Main content</a>
            <Btn label={'Open'} onClick={() => dispatch(openDrawer(<WelcomeDrawer/>))} />
        </div>
    </>
}

export default Welcome