//path: src\modules\Drawer\Internal\components\drawer.tsx

import { FC, useContext, useEffect, useState } from "react";
import React from "react";

import { useAgentStore } from "@modules/Agents/External/agentStore";
import { DrawerElement } from "@modules/Drawer/types";
import { DrawerContext } from "../hooks/useDrawer";
import { ConciergeChat } from "./conciergeChat";
import {
    CloseButtonPreset,
    MotionDiv,
    Composer,
    DivAtom,
} from "@modules/Composer";

const OuterWrapper = new Composer("OuterWrapper", MotionDiv)
    .withStyle("selection:text-night-dark")
    .withStyle("selection:bg-aqua-dark")
    .withStyle("bg-night-dark")
    .withStyle("rounded-xl")
    .withStyle("font-mono")
    .withStyle("inset-y-0")
    .withStyle("w-28p")
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
    .withStyle("font-extrabold")
    .withStyle("leading-tight")
    .withStyle("underline")
    .withStyle("text-2xl")
    .withStyle("h-[30%]")
    .withStyle("h-full")
    .withStyle("w-full")
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

const conciergeElementIndex = 199;

const Drawer: FC<DrawerProps> = React.memo((props) => {
    const conciergeAgent = useAgentStore((state) => state.conciergeAgent);
    const context = useContext(DrawerContext);
    const fetchConciergeAgent = useAgentStore(
        (state) => state.fetchConciergeAgent,
    );

    const [collapsedElements, setCollapsedElements] = useState<
        Record<number, boolean>
    >({});

    const toggleCollapse = (index: number) => {
        setCollapsedElements((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    useEffect(() => {
        fetchConciergeAgent();
    }, [fetchConciergeAgent]);

    if (!context) {
        throw new Error("Drawer must be used within a DrawerProvider");
    }
    const { closeDrawer } = context;

    return (
        <OuterWrapper motion={motionSettings}>
            <CloseButtonPreset onClick={closeDrawer}></CloseButtonPreset>
            <Card>
                <ElementWrapper>
                    <ElementHeader
                        className={`${
                            collapsedElements[conciergeElementIndex]
                                ? "rounded"
                                : "rounded-t"
                        } mr-2`}
                        onClick={() => toggleCollapse(conciergeElementIndex)}>
                        <span
                            className={`inline-block transform ${
                                collapsedElements[conciergeElementIndex]
                                    ? "-rotate-90"
                                    : ""
                            } mr-2`}>
                            ▼
                        </span>
                        {conciergeAgent
                            ? "Concierge: " + conciergeAgent.agent_name
                            : "untitled"}
                    </ElementHeader>
                    {!collapsedElements[conciergeElementIndex] && (
                        <ElementBody
                            className={`transition-all duration-300 ease-in-out ${
                                collapsedElements[conciergeElementIndex]
                                    ? "hidden"
                                    : "block"
                            }`}>
                            <ConciergeChat />
                        </ElementBody>
                    )}
                </ElementWrapper>
                {props.innerElements.map((element, index) => (
                    <ElementWrapper key={index}>
                        <ElementHeader
                            className={`${
                                collapsedElements[index]
                                    ? "rounded"
                                    : "rounded-t"
                            } mr-2`}
                            onClick={() => toggleCollapse(index)}>
                            <span
                                className={`inline-block transform ${
                                    collapsedElements[index] ? "-rotate-90" : ""
                                } mr-2`}>
                                ▼
                            </span>
                            {element.panelTitle}
                        </ElementHeader>
                        {!collapsedElements[index] && (
                            <ElementBody className="transition-all duration-300 ease-in-out">
                                {element.node}
                            </ElementBody>
                        )}
                    </ElementWrapper>
                ))}
            </Card>
        </OuterWrapper>
    );
});

Drawer.displayName = "Drawer";
export { Drawer };
