//path: src\modules\Utils\index.tsx

import { IsNullOrEmpty, Uid } from "./Internal/stringUtils";
import useKeyPress from "./Internal/useKeyPress";
import useCtrlS from "./Internal/useCtrlS";

interface IExternal {
    IsNullOrEmpty: (value: string) => boolean;
    Uid: () => string;
    useCtrlS: (callback: () => void) => void;
    useKeyPress: (targetKey: string, callback: () => void) => void;
}

// Module public api
const IUtilities: IExternal = {
    IsNullOrEmpty,
    Uid,
    useCtrlS,
    useKeyPress,
};

export default IUtilities;
