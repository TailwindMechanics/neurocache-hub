//path: src\threeComponents\virtualBackground\cityBackground.tsx

"use client"

import Buildings from "@/threeComponents/virtualBackground/buildings";
import FreeFlyControls from "@/threeComponents/freeFlyControls";
import Lights from "@/threeComponents/virtualBackground/lights";
import CameraSetup from "@/threeComponents/cameraSetup";
import SetBgColor from "@/threeComponents/setBgColour";
import Road from "@/threeComponents/geometry/road";
import colors from "src/data/colors.json";
import React from "react";


export default function CityBackground() {
    return <>
        <SetBgColor color={colors.background} />
        <CameraSetup />
        <FreeFlyControls />
        <Lights />
        <Road />
        <Buildings />
    </>
}