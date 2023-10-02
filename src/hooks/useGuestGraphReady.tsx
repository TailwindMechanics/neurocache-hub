//path: src\hooks\useGuestGraphReady.tsx

import { useGraphSessionReady } from "./useGraphSessionReady";

export const useGuestGraphReady = (callback: () => void) => {
	useGraphSessionReady(() => {}, callback);
};
