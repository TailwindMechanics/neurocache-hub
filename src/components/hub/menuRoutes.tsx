//path: src\app\hub\components\menuRoutes.tsx

"use client"

import ChatBubbleLeftIcon from '@heroicons/react/24/outline/ChatBubbleLeftIcon';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import BookOpenIcon from '@heroicons/react/24/outline/BookOpenIcon';
import UsersIcon from '@heroicons/react/24/outline/UsersIcon';
import KeyIcon from '@heroicons/react/24/outline/KeyIcon';
import { useRouter } from 'next/router'
import { ReactElement } from 'react';
import MenuItem from './menuItem';
import { FC } from 'react';

interface Route {
    path: string;
    icon: ReactElement;
    name: string;
}

const routes: Route[] = [
    {
        path: '/hub/dashboard',
        icon: <Squares2X2Icon />,
        name: 'Dashboard',
    },
    {
        path: '/hub/profile',
        icon: <UsersIcon />,
        name: 'Profile',
    },
    {
        path: '/hub/agents',
        icon: <UsersIcon />,
        name: 'Agents',
    },
    {
        path: '/hub/chat',
        icon: <ChatBubbleLeftIcon />,
        name: 'Chat',
    },
    {
        path: '/hub/apimanager',
        icon: <KeyIcon />,
        name: 'ApiManager',
    },
    {
        path: '/hub/docs',
        icon: <BookOpenIcon />,
        name: 'Docs',
    }
]

const MenuRoutes: FC = () => {
    const router = useRouter();
    
    return (
        <ul className="p-0 m-0 flex-grow menu">
            {routes.map((route, index) => (
                <MenuItem 
                    key={index} 
                    label={route.name} 
                    icon={route.icon} 
                    path={route.path} 
                    active={router.pathname === route.path}
                />
            ))}
        </ul>
    );
}

export default MenuRoutes;