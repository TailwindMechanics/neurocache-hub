//path: src\app\hub\dashboard\(welcome)\welcome.tsx

import { Btn } from '@/app/components/generic/react/btn'
import { openDrawer } from '../dashboardSlice';
import { useDispatch } from 'react-redux';
import { FC, ReactNode } from 'react'
import { LivePanel } from '@/app/components/generic/react/livePanel';


const Welcome: FC = () => {
    const dispatch = useDispatch();

    return <>
        <div className="flex flex-col rounded-xl gap-2 h-full items-stretch text-center">
            <a>Main content</a>
            <Btn label={'Open'} onClick={() => dispatch(openDrawer(<WelcomeStuff/>))} />
        </div>
    </>
}

const WelcomeStuff: FC = () => {
    return <>
        <LivePanel>
            <li><a>Welcome Item 1</a></li>
        </LivePanel>
        <LivePanel>
            <li><a>Welcome Item 2</a></li>
        </LivePanel>
        <LivePanel>
            <li><a>Welcome Item 3</a></li>
        </LivePanel>
        <LivePanel>
            <li><a>Welcome Item 4</a></li>
        </LivePanel>
    </>
}

export default Welcome