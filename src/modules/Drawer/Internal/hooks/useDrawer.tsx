//path: src\modules\Drawer\Internal\hooks\useDrawer.tsx

import { AnimatePresence } from "framer-motion";
import React, {
    useCallback,
    useContext,
    useEffect,
    ReactNode,
    useState,
    FC,
} from "react";

import { DrawerElement } from "@modules/Drawer/types";
import { Drawer } from "../components/drawer";

interface DrawerState {
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

    return (
        <DrawerContext.Provider value={{ openDrawer, closeDrawer, isOpen }}>
            {children}
            <AnimatePresence>
                {isOpen && <Drawer innerElements={innerElements} />}
            </AnimatePresence>
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
