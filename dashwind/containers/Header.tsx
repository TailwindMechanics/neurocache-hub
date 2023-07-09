//path: src\app\containers\Header.tsx

import { themeChange } from 'theme-change';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openRightDrawer } from '../../src/app/features/common/rightDrawerSlice';
import { RIGHT_DRAWER_TYPES } from '../../src/utils/globalConstantUtil';
// import { Link } from 'react-router-dom';

import { Bars3Icon, BellIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

interface HeaderState {
    noOfNotifications: number,
    pageTitle: string
}

function Header() {

    const dispatch = useDispatch();
    const { noOfNotifications, pageTitle } = useSelector((state: any): HeaderState => state.header);
    const [currentTheme, setCurrentTheme] = useState<string | null>(localStorage.getItem("theme"));

    useEffect(() => {
        themeChange(false);
        if (currentTheme === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setCurrentTheme("dark");
            } else {
                setCurrentTheme("light");
            }
        }
    }, []);

    const openNotification = () => {
        dispatch(openRightDrawer({ header: "Notifications", bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION, extraObject: {} }));
    };

    function logoutUser() {
        localStorage.clear();
        window.location.href = '/';
    }

    return <>
        <div className="navbar  flex justify-between bg-base-100  z-10 shadow-md ">
            <div className="">
                <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
                    <Bars3Icon className="h-5 inline-block w-5" />
                </label>
                <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
            </div>

            <div className="order-last">
                <label className="swap ">
                    <input type="checkbox" />
                    <SunIcon data-set-theme="light" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 " + (currentTheme === "dark" ? "swap-on" : "swap-off")} />
                    <MoonIcon data-set-theme="dark" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 " + (currentTheme === "light" ? "swap-on" : "swap-off")} />
                </label>
                <button className="btn btn-ghost ml-4  btn-circle" onClick={openNotification}>
                    <div className="indicator">
                        <BellIcon className="h-6 w-6" />
                        {noOfNotifications > 0 ? <span className="indicator-item badge badge-secondary badge-sm">{noOfNotifications}</span> : null}
                    </div>
                </button>
                <div className="dropdown dropdown-end ml-4">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src= "/images/bird80px.png" alt="profile" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="justify-between">
                            {/* <Link to={'/app/settings-profile'}>
                                Profile Settings
                                <span className="badge">New</span>
                            </Link> */}
                        </li>
                        {/* <li className=''><Link to={'/app/settings-billing'}>Bill History</Link></li> */}
                        <div className="divider mt-0 mb-0"></div>
                        <li><a onClick={logoutUser}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Header;