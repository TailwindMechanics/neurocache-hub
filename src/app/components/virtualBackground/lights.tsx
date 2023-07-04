// src\app\components\virtualBackground\lights.tsx
"use client"

export default function Lights() {
    return <>
        <ambientLight intensity={.05} />
        <directionalLight intensity={.9} position={[10, 100, 100]} />
    </>
}