//path: src\modules\Dev\index.tsx

import clearConsole from "./Internal/clearConsole";
import devShortcuts from "./Internal/devShortcuts";

interface Dev {
    Hotkeys: React.FC;
    ClearConsole: React.FC;
}

const IDev: Dev = {
    Hotkeys: devShortcuts,
    ClearConsole: clearConsole,
};

export default IDev;
