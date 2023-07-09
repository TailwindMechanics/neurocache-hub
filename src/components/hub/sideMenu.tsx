//path: src\app\hub\components\sideMenu.tsx

"use client"

import MenuRoutes from './menuRoutes'
import { FC } from 'react'


const SideMenu: FC = () => {
    return <>
        <div className="p-0 m-0 flex-grow menu">
            <MenuRoutes />
        </div>
    </>
}

export default SideMenu
