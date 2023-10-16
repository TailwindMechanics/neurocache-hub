//path: src\modules\Utils\Internal\useStart.tsx

import { useEffect } from "react";

const useStart = (callback: () => void) => {
    useEffect(() => {
        callback();
    }, [callback]);
};

export default useStart;
