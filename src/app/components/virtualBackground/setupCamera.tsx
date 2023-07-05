// src\app\components\virtualBackground\camera.tsx
"use client"

import { useThree } from '@react-three/fiber';
import { PerspectiveCamera } from 'three'
import React from 'react'


export default function SetupCamera() {
    const { camera } = useThree();
    const cam = camera as PerspectiveCamera;

    cam.aspect = window.innerWidth / window.innerHeight;
    cam.fov = 60;
    cam.far = 10000;
    cam.near = .1;
    
    return <></>
}