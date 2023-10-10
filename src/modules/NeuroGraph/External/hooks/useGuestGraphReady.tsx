//path: src\modules\hooks\useGuestGraphReady.tsx

import Use from "../../../hooks";

export const useGuestGraphReady = (callback: () => void) => {
	Use.GraphSessionReady(() => {}, callback);
};
