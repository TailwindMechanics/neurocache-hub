//path: src\app\components\virtualBackground\cityBackground.tsx

"use client"

import FreeFlyControls from "../generic/three/freeFlyControls";
import CameraSetup from "../generic/three/cameraSetup";
import SetBgColor from "../generic/three/setBgColour";
import colors from "src/app/data/colors.json";
import Buildings from "./buildings";
import Ground from './ground';
import Lights from "./lights";
import React from "react";


export default function CityBackground() {
    return <>
        <SetBgColor color={colors.background} />
        <CameraSetup />
        <FreeFlyControls />
        <Lights />
        <Ground />
        <Buildings />
    </>
}