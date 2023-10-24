//path: src\modules\Drawer\Internal\components\drawer.tsx

import { FC, useContext, useCallback, useEffect } from "react";

import { ButtonPreset, MotionDiv, Composer, DivAtom } from "@modules/Composer";
import { DrawerElement } from "@modules/Drawer/types";
import { Close } from "@modules/Icons/External/icons";
import { DrawerContext } from "../hooks/useDrawer";
import { NewAgent } from "@modules/Agents/Internal/components/newAgent";

const Card = new Composer("DrawerCard", MotionDiv)
    .withStyle("border-night-dark")
    .withStyle("scrollbar-hide")
    .withStyle("overflow-auto")
    .withStyle("bg-night")
    .withStyle("inset-y-0")
    .withStyle("max-w-md")
    .withStyle("flex-col")
    .withStyle("right-0")
    .withStyle("w-[25%]")
    .withStyle("border")
    .withStyle("fixed")
    .withStyle("m-1.5")
    .withStyle("p-1.5")
    .withStyle("flex")
    .withStyle("rounded-xl")
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
const NodeWrapper = new Composer("NewAgentHeader", DivAtom)
    .withStyle("border-aqua-dark")
    .withStyle("rounded-b-md")
    .withStyle("border-4")
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
    innerElements: DrawerElement[];
}

const TempDrawerElements: DrawerElement[] = [
    {
        node: <NewAgent />,
        panelTitle: "create new agent",
    },
    {
        node: <NewAgent />,
        panelTitle: "create new agent",
    },
    {
        node: <NewAgent />,
        panelTitle: "create new agent",
    },
    {
        node: <NewAgent />,
        panelTitle: "create new agent",
    },
    {
        node: <NewAgent />,
        panelTitle: "create new agent",
    },
    {
        node: <NewAgent />,
        panelTitle: "create new agent",
    },
    {
        node: <NewAgent />,
        panelTitle: "create new agent",
    },
    {
        node: <NewAgent />,
        panelTitle: "create new agent",
    },
    {
        node: <NewAgent />,
        panelTitle: "create new agent",
    },
];

export const Drawer: FC<DrawerProps> = (props) => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error("Drawer must be used within a DrawerProvider");
    }

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
                {"Inspector"}
                <CloseButton onClick={closeDrawer}>
                    <Close />
                </CloseButton>
            </HeaderContent>
            {TempDrawerElements.map((element, index) => (
                <NodeWrapper key={index}>{element.node}</NodeWrapper>
            ))}
        </Card>
    );
};
