//path: src\app\components\virtualBackground\ground.tsx

"use client"


export default function Ground() {
  return (
    <mesh
      position={[0, 0, -1000]}
      scale={[10, 500, 1]}
      rotation-x={-Math.PI * 0.5}
      castShadow
      receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color={[0.015, 0.015, 0.015]} />
    </mesh>
  );
}