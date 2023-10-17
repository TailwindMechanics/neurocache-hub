//path: src\modules\Composer\Internal\presets\tabList.tsx

import { ComponentBuilder } from "../components/ComponentBuilder";
import { TabList as TabListAtom } from "../atoms/tabList";

export const TabList = new ComponentBuilder("TabListPreset", TabListAtom)
    .withStyle("border-night-light")
    .withStyle("justify-around")
    .withStyle("bg-night")
    .withStyle("border")
    .withStyle("flex")
    .withRoundedElement()
    .build();
