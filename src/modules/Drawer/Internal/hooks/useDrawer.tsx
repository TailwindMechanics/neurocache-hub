//path: src\modules\Drawer\Internal\hooks\useDrawer.tsx

import React, {
    useCallback,
    useContext,
    ReactNode,
    useEffect,
    useState,
    FC,
} from "react";

interface DrawerState {
    openDrawer: (node: ReactNode) => void;
    closeDrawer: () => void;
}

const DrawerContext = React.createContext<DrawerState | undefined>(undefined);

const Drawer: FC<{ innerNode: ReactNode | null }> = ({ innerNode }) => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error("Drawer must be used within a DrawerProvider");
    }

    const { closeDrawer: closePanel } = context;
    const handleEscapePress = useCallback(
        (event: { key: string }) => {
            if (event.key === "Escape") {
                closePanel();
            }
        },
        [closePanel],
    );

    useEffect(() => {
        window.addEventListener("keydown", handleEscapePress);
        return () => {
            window.removeEventListener("keydown", handleEscapePress);
        };
    }, [handleEscapePress]);

    return (
        <div className="fixed inset-y-0 right-0 w-full max-w-md translate-x-0 transform overflow-auto bg-night p-4 transition-transform duration-700">
            <button
                onClick={closePanel}
                className="absolute right-4 top-4 text-aqua"
                aria-label="Close panel">
                X
            </button>
            {innerNode}
        </div>
    );
};

interface DrawerProviderProps {
    children: React.ReactNode;
}

export const DrawerProvider: FC<DrawerProviderProps> = ({ children }) => {
    const [innerNode, setInnerNode] = useState<ReactNode | null>(null);

    const openPanel = useCallback((node: ReactNode) => {
        setInnerNode(node);
    }, []);

    const closePanel = useCallback(() => {
        setInnerNode(null);
    }, []);

    return (
        <DrawerContext.Provider
            value={{ openDrawer: openPanel, closeDrawer: closePanel }}>
            {children}
            {innerNode && <Drawer innerNode={innerNode} />}
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
