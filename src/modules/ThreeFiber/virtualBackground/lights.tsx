//path: src\modules\ThreeFiber\virtualBackground\lights.tsx

"use client";

export function Lights() {
    return (
        <>
            <ambientLight intensity={0.005} />
            {/* <directionalLight 
            intensity={1} 
            position={[10, 100, 100]} 
            castShadow={true}
        /> */}
            <spotLight
                intensity={2}
                angle={Math.PI / 4}
                penumbra={1}
                position={[0, 50, 50]}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            {/* <spotLight
            color={[0.5, 0.5, 0.5]}
            intensity={2}
            angle={1}
            penumbra={0.5}
            position={[0, 100, 100]}
            castShadow={true}
            rotation={[Math.PI / 2,0,0]}
        /> */}
        </>
    );
}
