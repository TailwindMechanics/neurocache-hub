// src\app\components\virtualBackground\threeCanvas.tsx
"use client"

import { Canvas } from "@react-three/fiber";


interface ThreeCanvasProps {
    children: React.ReactNode;
}

export default function ThreeCanvas({ children }: ThreeCanvasProps) {
    return (
        <div className="fixed z-0 top-0 left-0 right-0 bottom-0 h-screen w-screen pointer-events-none">
            <Canvas
                shadows={"soft"}
                gl={{ antialias: true }}>
                {children}
            </Canvas>
        </div>
    );
}