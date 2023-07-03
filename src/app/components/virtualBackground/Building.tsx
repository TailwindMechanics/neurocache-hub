// src\app\components\virtualBackground\Building.tsx
import { Box } from '@react-three/drei';
import React from 'react';


export interface BuildingProps {
    position?: [number, number, number];
    scale?: [number, number, number];
    color: string;
}

const Building: React.FC<BuildingProps> = ({ color, position = [0, 0, 0], scale = [1, 1, 1] }) => {
    let pos = position;
    pos[1] += scale[1] / 2;

    return <>
    <Box position={pos} scale={scale}>
        <meshStandardMaterial color={color}/>
    </Box>
    </>;
};

export default Building;
