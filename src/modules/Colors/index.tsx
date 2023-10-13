//path: src\modules\Colors\index.tsx

import { flatColors } from "./Internal/colors";

export function IColorsInit() {
    for (const key in IColors) {
        console.log(key);
    }
}

namespace IColors {
    export const Colors = flatColors;
}

export default IColors;
