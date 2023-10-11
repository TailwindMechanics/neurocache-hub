//path: src\modules\ThreeFiber\materials\metalMat.tsx

"use client";

import { MeshReflectorMaterial } from "@react-three/drei";

export default function MetalMat() {
    return (
        <>
            <MeshReflectorMaterial
                envMapIntensity={0}
                dithering={true}
                color={[0.015, 0.015, 0.015]}
                roughness={0.7}
                blur={[1000, 400]}
                mixBlur={30}
                mixStrength={80}
                mixContrast={1}
                resolution={1024}
                mirror={0}
                depthScale={0.01}
                minDepthThreshold={0.9}
                maxDepthThreshold={1}
                depthToBlurRatioBias={0.25}
                reflectorOffset={0.2}
            />
        </>
    );
}
