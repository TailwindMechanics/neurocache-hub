// src\app\components\cityBackground.tsx
"use client"
import Building, { BuildingProps } from './Building';
import { CameraMotor } from "./cameraMotor";
import { Plane } from '@react-three/drei';
import colors from '../../colors.json';


export default function CityBackground() {
    const roadWidth = 400;
    const roadLength = 5000;

    let left = -200;
    const left01 : BuildingProps = {
        position: [left, 0, -200],
        scale: [100, 300, 1000],
    }
    const left02 : BuildingProps = {
        position: [left, 0, -1200],
        scale: [100, 250, 1000],
    }

    let right = 250;
    const right01 : BuildingProps = {
        position: [right, 0, -620],
        scale: [100, 300, 620],
    }
    const right02 : BuildingProps = {
        position: [right, 0, -1240],
        scale: [100, 150, 620],
    }
    
    return (<>
        <CameraMotor />
        <color attach="background" args={[colors.background]} />
        <ambientLight intensity={.1} />
        <pointLight position={[0, 5, -5]} />
        <Building position={left01.position} scale={left01.scale}/>        
        <Building position={left02.position} scale={left02.scale}/>        
        <Building position={right01.position} scale={right01.scale}/>        
        <Building position={right02.position} scale={right02.scale}/>        
        <Plane position={[0, 0, -roadLength/2]} scale={[roadWidth, roadLength, 1]} rotation={[-Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color={colors.background} />
        </Plane>
    </>)
}