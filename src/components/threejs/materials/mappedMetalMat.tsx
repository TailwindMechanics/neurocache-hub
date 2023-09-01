//path: src\components\threejs\materials\mappedMetalMat.tsx

"use client";

import { Texture, TextureLoader, RepeatWrapping } from "three";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

interface MappedMetalMatProps {
	roughUrl: string;
	normUrl: string;
	scale: [number, number, number];
}

export default function MappedMetalMat({
	roughUrl,
	normUrl,
	scale,
}: MappedMetalMatProps) {
	const roughness: Texture = useLoader(TextureLoader, roughUrl);
	const normal: Texture = useLoader(TextureLoader, normUrl);

	roughness.wrapS = roughness.wrapT = RepeatWrapping;
	roughness.repeat.set(scale[0] / 100, scale[1] / 100);

	normal.wrapS = normal.wrapT = RepeatWrapping;
	normal.repeat.set(scale[0] / 100, scale[1] / 100);

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
				roughnessMap={roughness}
				normalMap={normal}
			/>
		</>
	);
}