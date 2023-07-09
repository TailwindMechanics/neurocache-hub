//path: src\app\hub\components\mainContent.tsx

import { LivePanel } from '@/components/generic/livePanel'
import { FC } from 'react'


interface MainContentProps {
    children?: React.ReactNode;
}

const MainContent: FC<MainContentProps> = ({ children }) => {
    return <>
        <div className={`mt-10 shadow-2xl drop-shadow-2xl rounded-xl border p-4 bg-main-dark border-main-light flex-grow`}>
            <LivePanel>
                {children}
            </LivePanel>
        </div>
    </>
}

export default MainContent