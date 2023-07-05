//path: src\app\components\virtualBackground\Building.tsx

"use client";

import { Box } from '@react-three/drei';
import React from 'react';


interface BuildingProps {
    color: string;
    position?: number[];
    scale?: number[];
}

export default function Building ({ color, position = [0, 0, 0], scale = [1, 1, 1] } : BuildingProps){
    let vecScale = scale as [number, number, number];
    let pos = position as [number, number, number];
    pos[1] += scale[1] / 2;

    return <>
        <Box position={pos} scale={vecScale}>
            <meshStandardMaterial color={color} />
        </Box>
    </>;
};