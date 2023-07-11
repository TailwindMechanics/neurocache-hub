//path: src\components\hub\drawer.tsx

import { FC } from 'react';


interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: FC<DrawerProps> = ({ isOpen, onClose }) => {
    const dockClass = 'right-0';
    const side = 'drawer-end';

    return <>
        <div className={`${dockClass} ${side}`}>
            <input
                id={dockClass}
                type="checkbox"
                className="drawer-toggle"
                checked={isOpen}
                onChange={onClose}
            />
            <div className="flex drawer-content"></div>
            <div className="drawer-side py-1 pr-1">
                <ul className="menu drop-shadow-xl shadow-2xl p-4 w-80 h-full bg-main-dark border border-main-light text-text-light rounded-xl">
                    Content would be here if we had any
                </ul>
            </div>
        </div>
    </>
};

export default Drawer;