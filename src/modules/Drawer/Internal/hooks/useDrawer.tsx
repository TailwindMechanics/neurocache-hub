//path: src\modules\Drawer\Internal\hooks\useDrawer.tsx

import React, {
    useCallback,
    useContext,
    ReactNode,
    useEffect,
    useState,
    FC,
} from "react";

import { ButtonPreset, Composer, DivAtom } from "@modules/Composer";
import { Close } from "@modules/Icons/External/icons";

interface DrawerState {
    openDrawer: (nodes: ReactNode, panelTitle: string) => void;
    closeDrawer: () => void;
}

const DrawerContext = React.createContext<DrawerState | undefined>(undefined);

const Card = new Composer("DrawerCard", DivAtom)
    .withStyle("transition-transform")
    .withStyle("overflow-auto")
    .withStyle("translate-x-0")
    .withStyle("duration-700")
    .withStyle("bg-night")
    .withStyle("inset-y-0")
    .withStyle("transform")
    .withStyle("max-w-md")
    .withStyle("flex-col")
    .withStyle("right-0")
    .withStyle("w-[30%]")
    .withStyle("fixed")
    .withStyle("p-1.5")
    .withStyle("m-1.5")
    .withStyle("flex")
    .withStyle("-z-100")
    .withRoundedFrame()
    .withShadow()
    .build();
const CloseButton = new Composer("TableButton", ButtonPreset)
    .withStyle("w-[8%]")
    .withStyle("flex")
    .withStyle("flex-col")
    .withStyle("text-center")
    .withStyle("justify-center")
    .withStyle("items-center")
    .withStyle("mt-1")
    .withStyle("py-0.5")
    .withRoundedFull()
    .build();
const HeaderContent = new Composer("NewAgentHeader", DivAtom)
    .withStyle("text-night-dark")
    .withStyle("justify-between")
    .withStyle("bg-aqua-dark")
    .withStyle("items-end")
    .withStyle("rounded-t-md")
    .withStyle("font-bold")
    .withStyle("leading-tight")
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
        <Card>
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
            {innerNode && (
                <Drawer innerNode={innerNode} panelTitle={panelTitle} />
            )}
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
