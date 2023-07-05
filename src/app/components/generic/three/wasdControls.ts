// src\app\components\virtualBackground\wasdControls.ts
"use client"

import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { Object3D, Vector3 } from 'three';


export default function WasdControls({ speed = 0.1 }: { speed?: number }) {
  const { camera, scene } = useThree();
  const moveDirections = useRef({ forward: 0, right: 0, up: 0 });
  const driverRef = useRef<Object3D>(new Object3D());
  const [boost, setBoost] = useState(1); // Add a speed boost state

  // Attach the camera to the driver
  useEffect(() => {
    driverRef.current.add(camera);
    scene.add(driverRef.current);
  }, [camera, scene]);

  useFrame(() => {
    const direction = new Vector3();
    camera.getWorldDirection(direction);
    const rightDirection = new Vector3().crossVectors(direction, camera.up);

    // apply the move directions to the driver
    driverRef.current.position.addScaledVector(direction, (speed / 10) * moveDirections.current.forward * boost);
    driverRef.current.position.addScaledVector(rightDirection, (speed / 10) * moveDirections.current.right * boost);
    driverRef.current.position.y += (speed / 10) * moveDirections.current.up * boost;
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'w':
        case 'W':
          moveDirections.current.forward = 1;
          break;
        case 's':
        case 'S':
          moveDirections.current.forward = -1;
          break;
        case 'a':
        case 'A':
          moveDirections.current.right = -1;
          break;
        case 'd':
        case 'D':
          moveDirections.current.right = 1;
          break;
        case 'q':
        case 'Q':
          moveDirections.current.up = -1;
          break;
        case 'e':
        case 'E':
          moveDirections.current.up = 1;
          break;
        case 'Shift':
          setBoost(5); // Set speed boost when Shift is down
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'w':
        case 'W':
        case 's':
        case 'S':
          moveDirections.current.forward = 0;
          break;
        case 'a':
        case 'A':
        case 'd':
        case 'D':
          moveDirections.current.right = 0;
          break;
        case 'q':
        case 'Q':
        case 'e':
        case 'E':
          moveDirections.current.up = 0;
          break;
        case 'Shift':
          setBoost(1); // Reset speed boost when Shift is released
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [speed]);

  return null;
}