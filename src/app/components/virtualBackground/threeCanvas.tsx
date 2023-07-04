// src\app\components\virtualBackground\threeCanvas.tsx
"use client"

import CityBackground from "./cityBackground";
import { Canvas } from "@react-three/fiber";
import { Loading } from "../layout/loading";
import { Suspense } from "react";


interface ThreeCanvasProps {
    tailwind?: string;
}

export default function ThreeCanvas({ tailwind }: ThreeCanvasProps) {
    return <>
        <div className={`${tailwind} z-0 fixed top-0 left-0 right-0 bottom-0 h-screen w-screen`}>
            <Canvas shadows={"soft"} gl={{ antialias: true }}>
                <Suspense fallback={<Loading />}>
                    <CityBackground />
                </Suspense>
            </Canvas>
        </div>
    </>
}