//path: src\modules\Utils\Internal\useKeyPress.tsx

"use client";

import { useEffect } from "react";

const useKeyPress = (targetKey: string, callback: () => void) => {
    useEffect(() => {
        const keyPressHandler = (e: KeyboardEvent) => {
            if (e.code === targetKey) {
                e.preventDefault();
                callback();
            }
        };
        window.addEventListener("keydown", keyPressHandler);

        return () => {
            window.removeEventListener("keydown", keyPressHandler);
        };
    }, [targetKey, callback]);
};

export default useKeyPress;