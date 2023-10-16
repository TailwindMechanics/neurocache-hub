//path: src\modules\Composer\Internal\presets\tab.tsx

import ComponentBuilder from "../components/ComponentBuilder";
import TabAtom from "../atoms/tab";

const Tab = new ComponentBuilder("TabPreset", TabAtom)
    .withStyle("ui-selected:text-aqua-dark")
    .withStyle("text-night-title")
    .withStyle("hover:text-aqua")
    .withStyle("font-semibold")
    .withStyle("text-mono")
    .build();

export default Tab;
