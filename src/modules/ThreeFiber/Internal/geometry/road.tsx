//path: src\modules\ThreeFiber\Internal\geometry\road.tsx

"use client";

import React from "react";

import { PlaneGeo } from "./planeGeo";
import IColors from "@modules/Colors";

interface RoadProps {
    width?: number;
    length?: number;
}

export function Road({ width = 50, length = 1000 }: RoadProps) {
    return (
        <>
            <PlaneGeo pos={[0, 0, -length / 2]} scale={[width, length, 1]}>
                <meshStandardMaterial color={IColors.Colors.night} />
            </PlaneGeo>
        </>
    );
}
