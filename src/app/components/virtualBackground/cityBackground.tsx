// src\app\components\virtualBackground\cityBackground.tsx
"use client"

import { CameraControls, Environment } from "@react-three/drei";
import SetupCamera from "./setupCamera";
import Buildings from "./buildings";
import Ground from './ground';
import Lights from "./lights";
import React from "react";


export default function CityBackground() {
    return <>
        <SetupCamera />
        <CameraControls />
        <Lights />
        <Ground />
        <Buildings />
    </>
}