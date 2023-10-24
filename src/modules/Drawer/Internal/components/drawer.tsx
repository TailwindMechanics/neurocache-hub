//path: src\modules\Drawer\Internal\components\drawer.tsx

import { FC, useContext, useCallback, useEffect } from "react";

import { DrawerElement } from "@modules/Drawer/types";
import { DrawerContext } from "../hooks/useDrawer";
import {
    CloseButtonPreset,
    MotionDiv,
    Composer,
    DivAtom,
} from "@modules/Composer";

const OuterWrapper = new Composer("OuterWrapper", MotionDiv)
    .withStyle("bg-night-dark")
    .withStyle("rounded-xl")
    .withStyle("inset-y-0")
    .withStyle("w-[25%]")
    .withStyle("right-0")
    .withStyle("fixed")
    .withStyle("p-1.5")
    .withStyle("m-1")
    .withShadow()
    .build();
const Card = new Composer("DrawerCard", DivAtom)
    .withStyle("scrollbar-hide")
    .withStyle("overflow-auto")
    .withStyle("rounded-md")
    .withStyle("space-y-2")
    .withStyle("flex-col")
    .withStyle("h-full")
    .withStyle("flex")
    .build();
const ElementWrapper = new Composer("NewAgentHeader", DivAtom)
    .withStyle("rounded-b-md")
    .withStyle("bg-night")
    .withStyle("flex-col")
    .withStyle("flex")
    .build();
const ElementHeader = new Composer("NewAgentHeader", DivAtom)
    .withStyle("text-night-dark")
    .withStyle("bg-aqua-dark")
    .withStyle("leading-tight")
    .withStyle("rounded-t-md")
    .withStyle("font-bold")
    .withStyle("underline")
    .withStyle("h-[30%]")
    .withStyle("pt-0.5")
    .withStyle("px-2.5")
    .build();
const ElementBody = new Composer("NewAgentHeader", DivAtom)
    .withStyle("border-aqua-dark")
    .withStyle("rounded-b-md")
    .withStyle("border-2")
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
        <OuterWrapper motion={motionSettings}>
            <CloseButtonPreset onClick={closeDrawer}></CloseButtonPreset>
            <Card>
                {props.innerElements.map((element, index) => (
                    <ElementWrapper key={index}>
                        <ElementHeader>{element.panelTitle}</ElementHeader>
                        <ElementBody>{element.node}</ElementBody>
                    </ElementWrapper>
                ))}
            </Card>
        </OuterWrapper>
    );
};
