//path: src\modules\Graph\Internal\core\styleReactFlowLogo.tsx

"use client";

import { useEffect } from "react";

export function StyleReactFlowLogo() {
    useEffect(() => {
        const attributionElement = document.querySelector(
            ".react-flow__attribution",
        ) as HTMLElement;
        if (attributionElement) {
            // Change the link color to suit your color scheme
            const linkElement = attributionElement.querySelector("a");
            if (linkElement) {
                // todo set reactflow text if this ever goes public
                // linkElement.textContent = "React Flow";
                linkElement.textContent = "neurocache";
                linkElement.style.color = "#f5cdc1";
                linkElement.classList.add(
                    "underline",
                    "select-none",
                    "absolute",
                    "bottom-1",
                    "right-3",
                    "font-mono",
                    "text-sm",
                    "font-semibold",
                    "w-max",
                    "text-rose-light",
                    "z-10",
                );
            }

            attributionElement.style.backgroundColor = "#00000000";
        }
    }, []);
}
