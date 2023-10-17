//path: src\modules\Utils\Internal\useStart.tsx

import { useEffect } from "react";

export const useStart = (callback: () => void) => {
    useEffect(() => {
        callback();
    }, [callback]);
};
