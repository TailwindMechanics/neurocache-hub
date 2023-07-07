//path: src\app\containers\LeftSidebar.tsx

import { FC } from 'react';
import routes from '../routes/sidebar'
import { NavLink, Link, useMatch } from 'react-router-dom'
import SidebarSubmenu from './SidebarSubmenu';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'


const LeftSidebar: FC = () => {
    const close = () => {
        const leftSidebarDrawer = document.getElementById('left-sidebar-drawer');
        if (leftSidebarDrawer) {
            leftSidebarDrawer.click();
        }
    }

    return (
        <div className="drawer-side ">
            <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
            <ul className="menu  pt-2 w-80 bg-base-100 text-base-content">
                <button className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden" onClick={close}>
                    <XMarkIcon className="h-5 inline-block w-5" />
                </button>

                <li className="mb-2 font-semibold text-xl">
                    <Link to='/app/welcome'>
                        <img className="mask mask-squircle w-10" src="/logo192.png" alt="DashWind Logo" />DashWind
                    </Link>
                </li>
                {routes.map((route, k) => (
                    <li key={k}>
                        {route.submenu ?
                            <SidebarSubmenu {...route} /> :
                            (<NavLink
                                to={route.path}
                                className={`some-class ${useMatch(route.path) ? 'active-class' : ''}`}>
                                {route.icon} {route.name}
                            </NavLink>)}
                    </li>))}
            </ul>
        </div>
    )
}

export default LeftSidebar
