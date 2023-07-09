//path: src\app\components\generic\three\geometry\road.tsx

"use client"

import PlaneGeo from "@/threeComponents/geometry/planeGeo";
import colors from "@/data/colors.json";
import React from "react";


interface RoadProps {
  width?: number,
  length?: number,
}

export default function Road({width = 50, length = 1000}:RoadProps) {
  return <>
    <PlaneGeo
        pos={[0, 0, -length / 2]}
        scale={[width, length, 1]}>
        <meshStandardMaterial color={colors.background} />
      </PlaneGeo>
  </>
}
