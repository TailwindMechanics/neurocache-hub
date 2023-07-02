"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Plane, Box } from '@react-three/drei';


export default function VirtualBackground() {
    return (
        <div className="fixed z-0 top-0 left-0 right-0 bottom-0 h-screen w-screen">
            <Canvas>
                <OrbitControls />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]}>
                    <meshStandardMaterial color={'orange'} />
                </Box>
                <Sphere position={[1.2, 0, 0]}>
                    <meshStandardMaterial color={'white'} />
                </Sphere>
                <Plane position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color={'#282c34'} />
                </Plane>
            </Canvas>
        </div>
    )
}