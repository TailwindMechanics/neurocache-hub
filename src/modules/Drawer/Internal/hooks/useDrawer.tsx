//path: src\modules\Drawer\Internal\hooks\useDrawer.tsx

import React, { useCallback, useContext, ReactNode, useState, FC } from "react";
import { AnimatePresence } from "framer-motion";

import { DrawerElement } from "@modules/Drawer/types";
import { Drawer } from "../components/drawer";
import { DrawerController } from "../components/drawerController";

interface DrawerState {
    toggleDrawer: () => void;
    openDrawer: (elements: DrawerElement[]) => void;
    closeDrawer: () => void;
    isOpen: boolean;
}

export const DrawerContext = React.createContext<DrawerState | undefined>(
    undefined,
);

interface DrawerProviderProps {
    children: ReactNode;
}

export const DrawerProvider: FC<DrawerProviderProps> = ({ children }) => {
    const [innerElements, setInnerElements] = useState<DrawerElement[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openDrawer = useCallback((elements: DrawerElement[]) => {
        setInnerElements(elements);
        setIsOpen(true);
    }, []);

    const closeDrawer = useCallback(() => {
        setInnerElements([]);
        setIsOpen(false);
    }, []);

    const toggleDrawer = useCallback(() => {
        if (isOpen) {
            closeDrawer();
        } else {
            openDrawer([]);
        }
    }, [closeDrawer, isOpen, openDrawer]);

    return (
        <DrawerContext.Provider
            value={{ toggleDrawer, openDrawer, closeDrawer, isOpen }}>
            {children}
            <AnimatePresence>
                {isOpen && <Drawer innerElements={innerElements} />}
            </AnimatePresence>
            <DrawerController />
        </DrawerContext.Provider>
    );
};

export function useDrawer(): DrawerState {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error("useDrawer must be used within a DrawerProvider");
    }
    return context;
}
