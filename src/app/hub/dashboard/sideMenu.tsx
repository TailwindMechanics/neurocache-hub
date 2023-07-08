//path: src\app\hub\dashboard\sideMenu.tsx

import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { KeyIcon } from '@heroicons/react/24/outline'
import MenuItem from './menuItem'
import { FC } from 'react'


const SideMenu: FC = () => {
    return <>
        <ul className="p-0 m-0 flex-grow menu">
            <MenuItem label="Dashboard" icon={<Squares2X2Icon />} />
            <MenuItem label="Profile" icon={<UserIcon />} />
            <MenuItem label="Agents" icon={<UsersIcon />} />
            <MenuItem label="Chat" icon={<ChatBubbleLeftIcon />} />
            <MenuItem label="Api" icon={<KeyIcon />} />
            <MenuItem label="Docs" icon={<BookOpenIcon />} />
        </ul>
    </>
}

export default SideMenu
