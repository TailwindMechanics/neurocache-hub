//path: src\modules\Utils\index.tsx

import UseKeyPress from "./Internal/useKeyPress";
import UseCtrlS from "./Internal/useCtrlS";
import {
    IsNullOrEmpty as isNullOrEmpty,
    Uid as uid,
} from "./Internal/stringUtils";

export function IUtilitiesInit() {
    for (const key in IUtilities) {
        console.log(key);
    }
}

namespace IUtilities {
    export const IsNullOrEmpty = isNullOrEmpty;
    export const Uid = uid;
    export const useCtrlS = UseKeyPress;
    export const useKeyPress = UseCtrlS;
}

export default IUtilities;
