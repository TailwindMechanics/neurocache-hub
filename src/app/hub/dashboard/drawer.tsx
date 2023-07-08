//path: src\app\hub\dashboard\drawer.tsx

import { FC, ReactNode } from 'react';


interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const Drawer: FC<DrawerProps> = ({ isOpen, onClose, children }) => {
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
                        {children}
                    </ul>
            </div>
        </div>
    </>
};

export default Drawer;
