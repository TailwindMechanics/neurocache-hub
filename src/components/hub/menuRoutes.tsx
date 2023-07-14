//path: src\components\hub\menuRoutes.tsx

"use client"

import ChatBubbleLeftIcon from '@heroicons/react/24/outline/ChatBubbleLeftIcon';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import BookOpenIcon from '@heroicons/react/24/outline/BookOpenIcon';
import UsersIcon from '@heroicons/react/24/outline/UsersIcon';
import KeyIcon from '@heroicons/react/24/outline/KeyIcon';
import { usePathname } from 'next/navigation'
import { ReactElement } from 'react';
import MenuItem from './menuItem';
import { FC } from 'react';


interface Route {
    path: string;
    icon: ReactElement;
    name: string;
    authenticated: boolean;
}

const routes: Route[] = [
    {
        path: '/',
        icon: <Squares2X2Icon />,
        name: 'Home',
        authenticated: false
    },
    {
        path: '/dashboard',
        icon: <Squares2X2Icon />,
        name: 'Dashboard',
        authenticated: true
    },
    {
        path: '/profile',
        icon: <UsersIcon />,
        name: 'Profile',
        authenticated: true
    },
    {
        path: '/agents',
        icon: <UsersIcon />,
        name: 'Agents',
        authenticated: true
    },
    {
        path: '/chat',
        icon: <ChatBubbleLeftIcon />,
        name: 'Chat',
        authenticated: true
    },
    {
        path: '/manage-api',
        icon: <KeyIcon />,
        name: 'Manage Api',
        authenticated: true
    },
    {
        path: '/docs',
        icon: <BookOpenIcon />,
        name: 'Docs',
        authenticated: true
    }
]

const MenuRoutes: FC = () => {
    const pathname = usePathname();
    
    return (
        <ul className="p-0 m-0 flex-grow menu">
            {routes.map((route, index) => (
                <MenuItem 
                    key={index} 
                    label={route.name} 
                    icon={route.icon} 
                    path={route.path} 
                    active={pathname === route.path}
                />
            ))}
        </ul>
    );
}

export default MenuRoutes;