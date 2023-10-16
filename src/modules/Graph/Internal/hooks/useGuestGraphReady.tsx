//path: src\modules\Graph\Internal\hooks\useGuestGraphReady.tsx

import useGraphSessionReady from "./useGraphSessionReady";

export const useGuestGraphReady = (callback: () => void) => {
    useGraphSessionReady(() => {}, callback);
};
