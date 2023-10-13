//path: src\modules\Dev\index.tsx

import clearConsole from "./Internal/clearConsole";
import devShortcuts from "./Internal/devShortcuts";

export function IDevInit() {
    for (const key in IDev) {
        console.log(key);
    }
}

namespace IDev {
    export const Hotkeys = devShortcuts;
    export const ClearConsole = clearConsole;
}

export default IDev;
