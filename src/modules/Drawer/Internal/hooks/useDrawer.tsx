//path: src\modules\Drawer\Internal\hooks\useDrawer.tsx

import { AnimatePresence } from "framer-motion";
import React, {
    useCallback,
    useContext,
    ReactNode,
    useEffect,
    useState,
    FC,
} from "react";

import { ButtonPreset, Composer, DivAtom, MotionDiv } from "@modules/Composer";
import { Close } from "@modules/Icons/External/icons";

interface DrawerState {
    openDrawer: (nodes: ReactNode, panelTitle: string) => void;
    closeDrawer: () => void;
}

const DrawerContext = React.createContext<DrawerState | undefined>(undefined);

const Card = new Composer("DrawerCard", MotionDiv)
    .withStyle("border-night-dark")
    .withStyle("overflow-auto")
    .withStyle("bg-night")
    .withStyle("inset-y-0")
    .withStyle("max-w-md")
    .withStyle("flex-col")
    .withStyle("right-0")
    .withStyle("w-[30%]")
    .withStyle("border")
    .withStyle("fixed")
    .withStyle("m-1.5")
    .withStyle("flex")
    .withStyle("p-2")
    .withRoundedFrame()
    .withShadow()
    .build();
const CloseButton = new Composer("TableButton", ButtonPreset)
    .withStyle("justify-center")
    .withStyle("items-center")
    .withStyle("text-center")
    .withStyle("flex-col")
    .withStyle("w-[8%]")
    .withStyle("py-0.5")
    .withStyle("flex")
    .withStyle("mt-1")
    .withRoundedFull()
    .build();
const HeaderContent = new Composer("NewAgentHeader", DivAtom)
    .withStyle("text-night-dark")
    .withStyle("justify-between")
    .withStyle("bg-aqua-dark")
    .withStyle("leading-tight")
    .withStyle("rounded-t-md")
    .withStyle("items-end")
    .withStyle("font-bold")
    .withStyle("px-2")
    .withStyle("flex")
    .build();
const BodyContent = new Composer("NewAgentHeader", DivAtom)
    .withStyle("border-aqua-dark")
    .withStyle("rounded-b-md")
    .withStyle("border-2")
    .withStyle("flex-col")
    .withStyle("flex")
    .build();

const motionSettings = {
    initial: { x: "100%" },
    animate: { x: "0%" },
    exit: { x: "100%" },
    transition: { duration: 0.2, ease: "circOut" },
};

interface DrawerProps {
    innerNode: ReactNode;
    panelTitle: string;
}

const Drawer: FC<DrawerProps> = (props) => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error("Drawer must be used within a DrawerProvider");
    }

    const panelTitle = props.panelTitle ?? "drawer";
    const { closeDrawer } = context;
    const handleEscapePress = useCallback(
        (event: { key: string }) => {
            if (event.key === "Escape") {
                closeDrawer();
            }
        },
        [closeDrawer],
    );

    useEffect(() => {
        window.addEventListener("keydown", handleEscapePress);
        return () => {
            window.removeEventListener("keydown", handleEscapePress);
        };
    }, [handleEscapePress]);

    return (
        <Card motion={motionSettings}>
            <HeaderContent>
                {panelTitle}
                <CloseButton onClick={closeDrawer}>
                    <Close />
                </CloseButton>
            </HeaderContent>
            <BodyContent>{props.innerNode}</BodyContent>
        </Card>
    );
};

interface DrawerProviderProps {
    children: ReactNode;
}

export const DrawerProvider: FC<DrawerProviderProps> = ({ children }) => {
    const [innerNode, setInnerNode] = useState<ReactNode | null>(null);
    const [panelTitle, setPanelTitle] = useState<string>("");

    const openDrawer = useCallback((node: ReactNode, title: string) => {
        setInnerNode(node);
        setPanelTitle(title);
    }, []);

    const closeDrawer = useCallback(() => {
        setInnerNode(null);
        setPanelTitle("");
    }, []);

    return (
        <DrawerContext.Provider value={{ openDrawer, closeDrawer }}>
            {children}
            <AnimatePresence>
                {innerNode && (
                    <Drawer innerNode={innerNode} panelTitle={panelTitle} />
                )}
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
