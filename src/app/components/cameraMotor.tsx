import { PerspectiveCamera } from '@react-three/drei'
import { useSpring } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useEffect } from 'react'
import { Path } from '../utils/path'
import { Vector3 } from 'three'

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
    }));

    let cameraRef = useRef<THREE.PerspectiveCamera>();
    let acceleration = useRef(0);

    // clamp a value between min and max
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            const canvasRect = document.querySelector('canvas')?.getBoundingClientRect();
            if (canvasRect && event.clientX >= canvasRect.left && event.clientX <= canvasRect.right && event.clientY >= canvasRect.top && event.clientY <= canvasRect.bottom) {
                acceleration.current += event.deltaY * 0.001;  // adjust multiplier as needed
                acceleration.current = clamp(acceleration.current, -1, 1);
            }
        }

        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        }
    }, []);

    useFrame(() => {
        if (cameraRef.current) {
            let moveTarget = moveTargetPath.Sample(0.5 + acceleration.current * 0.5);
            let lookTarget = lookTargetPath.Sample(0.5 + acceleration.current * 0.5);
            set({ position: moveTarget })

            let newCameraPos = new Vector3().fromArray(springProps.position.get());
            cameraRef.current.position.copy(newCameraPos);
            cameraRef.current.lookAt(new Vector3().fromArray(lookTarget));

            cameraRef.current.updateProjectionMatrix();
        }
    });

    return <PerspectiveCamera
        ref={cameraRef}
        makeDefault // this replaces the default camera
        fov={16.665}    // field of view
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}  // near clipping plane
        far={5000}  // far clipping plane
    />
}
