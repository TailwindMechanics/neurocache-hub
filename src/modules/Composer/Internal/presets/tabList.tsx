//path: src\modules\Composer\Internal\presets\tabList.tsx

import ComponentBuilder from "../components/ComponentBuilder";
import TabListAtom from "../atoms/tabList";

const TabList = new ComponentBuilder("TabListPreset", TabListAtom)
    .withStyle("border-night-light")
    .withStyle("justify-around")
    .withStyle("bg-night")
    .withStyle("border")
    .withStyle("flex")
    .withRoundedElement()
    .build();

export default TabList;
