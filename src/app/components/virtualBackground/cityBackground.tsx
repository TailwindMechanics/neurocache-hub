// src\app\components\virtualBackground\cityBackground.tsx
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
        color: colors.primary,
    }
    const left02 : BuildingProps = {
        position: [left, 0, -1200],
        scale: [100, 750, 1000],
        color: colors.secondary,
    }
    const left03 : BuildingProps = {
        position: [left, 0, -2200],
        scale: [100, 450, 1000],
        color: colors.accent,
    }
    const left04 : BuildingProps = {
        position: [left, 0, -3200],
        scale: [100, 800, 1000],
        color: colors.background,
    }
    const left05 : BuildingProps = {
        position: [left, 0, -4200],
        scale: [100, 600, 1000],
        color: colors.primary,
    }
    const left06 : BuildingProps = {
        position: [left, 0, -5200],
        scale: [100, 1000, 1000],
        color: colors.secondary,
    }

    let right = 250;
    const right01 : BuildingProps = {
        position: [right, 0, -600],
        scale: [100, 300, 600],
        color: colors.accent,
    }
    const right02 : BuildingProps = {
        position: [right, 0, -1200],
        scale: [100, 150, 600],
        color: colors.background,
    }
    const right03 : BuildingProps = {
        position: [right, 0, -2000],
        scale: [100, 450, 1000],
        color: colors.primary,
    }
    const right04 : BuildingProps = {
        position: [right, 0, -3000],
        scale: [100, 900, 1000],
        color: colors.secondary,
    }
    const right05 : BuildingProps = {
        position: [right, 0, -4000],
        scale: [100, 650, 1000],
        color: colors.accent,
    }
    const right06 : BuildingProps = {
        position: [right, 0, -5000],
        scale: [100, 1050, 1000],
        color: colors.background,
    }
    
    return (<>
        <CameraMotor />
        <color attach="background" args={[colors.background]} />
        <ambientLight intensity={.1} />
        <pointLight position={[0, 5, -5]} />
        <Building color={left01.color} position={left01.position} scale={left01.scale}/>        
        <Building color={left02.color} position={left02.position} scale={left02.scale}/>        
        <Building color={left03.color} position={left03.position} scale={left03.scale}/>        
        <Building color={left04.color} position={left04.position} scale={left04.scale}/>        
        <Building color={left05.color} position={left05.position} scale={left05.scale}/>        
        <Building color={left06.color} position={left06.position} scale={left06.scale}/>        
        <Building color={right01.color} position={right01.position} scale={right01.scale}/>        
        <Building color={right02.color} position={right02.position} scale={right02.scale}/>        
        <Building color={right03.color} position={right03.position} scale={right03.scale}/>        
        <Building color={right04.color} position={right04.position} scale={right04.scale}/>        
        <Building color={right05.color} position={right05.position} scale={right05.scale}/>        
        <Building color={right06.color} position={right06.position} scale={right06.scale}/>        
        <Plane position={[0, 0, -roadLength/2]} scale={[roadWidth, roadLength, 1]} rotation={[-Math.PI / 2, 0, 0]}>
            <meshToonMaterial color={colors.background} />
        </Plane>
    </>)
}