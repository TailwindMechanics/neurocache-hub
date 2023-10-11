//path: src\modules\ThreeFiber\geometry\road.tsx

"use client";

import React from "react";

import Data from "@shared/data";
import { PlaneGeo } from "..";

interface RoadProps {
    width?: number;
    length?: number;
}

export function Road({ width = 50, length = 1000 }: RoadProps) {
    return (
        <>
            <PlaneGeo pos={[0, 0, -length / 2]} scale={[width, length, 1]}>
                <meshStandardMaterial color={Data.Colors.night} />
            </PlaneGeo>
        </>
    );
}
