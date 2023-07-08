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
            <div className="drawer-content"></div>
            <div className="drawer-side">
                <label htmlFor={dockClass} className="drawer-overlay"></label>
                <div className='h-full py-2'>
                    <ul className="menu p-4 w-80 h-full bg-primary border border-secondary text-accent rounded-xl">
                        {children}
                    </ul>
                </div>
            </div>
        </div>
    </>
};

export default Drawer;
