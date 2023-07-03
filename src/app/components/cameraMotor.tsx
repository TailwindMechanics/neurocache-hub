// src\app\components\cameraMotor.tsx
"use client"
import { PerspectiveCamera } from '@react-three/drei'
import { useSpring } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import { Path } from '../utils/path'
import { Vector3 } from 'three'
import React from 'react'

const right = 200;
const lookTargetPath = new Path([
    [right, 340, -3500],
    [right, 340, -4000],
]);

const left = -60;
const moveTargetPath = new Path([
    [left, 200, 0],
    [left, 20, -20],
    [left, 20, -20],
    [left, 20, -20],
    [left, 20, -25],
    [left, 20, -30],
    [left, 20, -40],
    [0, 20, -1000],
]);

export function CameraMotor() {
    const [springProps, set] = useSpring(() => ({
        position: [0, 0, 0], 
        config: {
            mass: 100,
            tension: 100,
            friction: 100,
            precision: 0.0001,
        }
    }))

    let cameraRef = React.useRef<THREE.PerspectiveCamera>();
    let previousCameraPos = new Vector3(0, 0, 0);
    
    useFrame(() => {
        if (cameraRef.current) {
            let normalizedScroll = window.scrollY / (document.body.scrollHeight - window.innerHeight)
            let moveTarget = moveTargetPath.Sample(normalizedScroll)
            let lookTarget = lookTargetPath.Sample(normalizedScroll)
            set({ position: moveTarget })
            
            let newCameraPos = new Vector3().fromArray(springProps.position.get());
            cameraRef.current.position.copy(newCameraPos);
            cameraRef.current.lookAt(new Vector3().fromArray(lookTarget));
            
            cameraRef.current.updateProjectionMatrix();
            previousCameraPos.copy(newCameraPos);
        }
    })

    return <PerspectiveCamera 
        ref={cameraRef}
        makeDefault // this replaces the default camera
        fov={16.665}    // field of view
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}  // near clipping plane
        far={5000}  // far clipping plane
    />
}