//path: src\app\hub\dashboard\menuItem.tsx

import { LivePanel } from '@/app/components/generic/react/livePanel'
import { FC, ReactElement } from 'react'


interface MenuItemProps {
    label: string,
    icon: ReactElement,
    onClick?: () => void
}

const MenuItem: FC<MenuItemProps> = ({ label, icon, onClick }) => {
    return <>
        <div className='flex-grow'>
            <LivePanel>
                <div className='flex-grow'>
                <button onClick={onClick} className={`p-2 flex w-full items-center justify-start border border-main-light text-text-dark hover:bg-main-light hover:text-text-light`}>
                    <span className="w-5 h-5 mr-2">{icon}</span>
                    {label}
                </button>
                </div>
            </LivePanel>
        </div>
    </>
}

export default MenuItem
