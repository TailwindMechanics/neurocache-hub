//path: src\modules\ThreeFiber\Internal\virtualBackground\cityBackground.tsx

"use client";

import IColors from "@modules/Colors";
import {
    FreeFlyControls,
    SetupCamera,
    SetBgColor,
    Buildings,
    Lights,
    Road,
} from "../..";

export default function CityBackground() {
    return (
        <>
            <SetBgColor color={IColors.Colors.night} />
            <SetupCamera />
            <FreeFlyControls />
            <Lights />
            <Road />
            <Buildings />
        </>
    );
}
