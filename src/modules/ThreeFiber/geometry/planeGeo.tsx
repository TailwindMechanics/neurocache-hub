//path: src\modules\ThreeFiber\geometry\planeGeo.tsx

"use client";

import React from "react";

interface ReflectivePlaneProps {
    pos?: [number, number, number];
    rot?: [number, number, number];
    scale?: [number, number, number];
    children?: React.ReactNode;
}

export function PlaneGeo({
    pos = [0, 0, 0],
    rot = [-Math.PI * 0.5, 0, 0],
    scale = [1, 1, 1],
    children,
}: ReflectivePlaneProps) {
    return (
        <>
            <mesh
                position={pos}
                rotation={rot}
                scale={scale}
                castShadow
                receiveShadow>
                <planeGeometry args={[1, 1]} />
                {children}
            </mesh>
        </>
    );
}
