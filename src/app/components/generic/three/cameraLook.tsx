//path: src\app\components\generic\three\cameraLook.tsx

"use client";

import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";

interface CameraLookProps {
    speed: number;
}

export default function CameraLook({ speed }: CameraLookProps) {
    const { camera } = useThree();
    const [isRightButtonDown, setRightButtonDown] = useState(false);

    const requestPointerLock = () => {
        document.body.requestPointerLock();
    };

    const exitPointerLock = () => {
        document.exitPointerLock();
    };

    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => {
            if (event.button === 2) {
                requestPointerLock();
                setRightButtonDown(true);
            }
        };

        const handleMouseUp = (event: MouseEvent) => {
            if (event.button === 2) {
                exitPointerLock();
                setRightButtonDown(false);
            }
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (isRightButtonDown) {
                camera.rotateOnWorldAxis(new Vector3(0, 1, 0), -event.movementX * (speed / 1000));
                camera.rotateOnAxis(new Vector3(1, 0, 0), -event.movementY * (speed / 1000));
            }
        };

        const handleContextMenu = (event: Event) => {
            event.preventDefault();
        };

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("contextmenu", handleContextMenu);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("contextmenu", handleContextMenu);
        };
    }, [camera, isRightButtonDown, speed]);

    return null;
}
