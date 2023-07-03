import { Box } from '@react-three/drei';
import colors from '../colors.json';
import React from 'react';

export interface BuildingProps {
    position?: [number, number, number];
    scale?: [number, number, number];
}

const Building: React.FC<BuildingProps> = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
    let pos = position;
    pos[1] += scale[1] / 2;

    return <>
    <Box position={pos} scale={scale}>
        <meshStandardMaterial color={colors['primary-content']}/>
    </Box>
    </>;
};

export default Building;
