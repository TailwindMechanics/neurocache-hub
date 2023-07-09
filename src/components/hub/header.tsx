//path: src\components\hub\header.tsx

import { LivePanel } from '@/components/generic/livePanel'
import { FC } from 'react'


interface HeaderProps {
    text:string
}

const Header: FC<HeaderProps> = ({ text }) => {
    return <>
        <div className={``}>
            <div className="shadow-xl drop-shadow-2xl text-center rounded-xl p-4 border bg-main-dark border-main-light">
                <LivePanel>
                    {text}
                </LivePanel>
            </div>
        </div>
    </>
}

export default Header