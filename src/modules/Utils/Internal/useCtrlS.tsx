//path: src\modules\Utils\Internal\useCtrlS.tsx

"use client";

import { useEffect } from "react";

const useCtrlS = (callback: () => void) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === "s") {
                event.preventDefault();
                callback();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [callback]);
};

export default useCtrlS;
