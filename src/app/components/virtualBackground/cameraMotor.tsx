// src\app\components\virtualBackground\cameraMotor.tsx
"use client"

import { useFrame, useThree } from '@react-three/fiber'
import { clamp } from 'three/src/math/MathUtils'
import { useSpring } from '@react-spring/three'
import { useEffect, useRef } from 'react'
import { Path } from '../../utils/path'
import { Vector3 } from 'three'


export function CameraMotor() {
    const { camera } = useThree();
    
    const lookTargetPath = new Path([
        [200, 500, -3500],
        [200, 300, -4000]]);
    const moveTargetPath = new Path([
        [-60, 1500, 10000],
        [0, 200, -1000]]);

    const [springProps, set] = useSpring(() => ({
        position: [0, 0, 0],
        config: {
            mass: 100,
            tension: 100,
            friction: 50,
            precision: 0.0001,
        }
    }));

    let acceleration = useRef(0);

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            const canvasRect = document.querySelector('canvas')?.getBoundingClientRect();
            if (canvasRect && event.clientX >= canvasRect.left && event.clientX <= canvasRect.right && event.clientY >= canvasRect.top && event.clientY <= canvasRect.bottom) {
                acceleration.current += event.deltaY * 0.0005; 
                acceleration.current = clamp(acceleration.current, -1, 1);
            }
        }

        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        }
    }, []);

    useFrame(() => {
        let moveTarget = moveTargetPath.Sample(0.5 + acceleration.current * 0.5);
        let lookTarget = lookTargetPath.Sample(0.5 + acceleration.current * 0.5);
        set({ position: moveTarget })

        let newCameraPos = new Vector3().fromArray(springProps.position.get());
        camera.position.copy(newCameraPos);
        camera.lookAt(new Vector3().fromArray(lookTarget));
    });

    return null;
}