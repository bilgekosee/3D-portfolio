import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars
        radius={30}
        depth={50}
        count={500}
        factor={2}
        saturation={0}
        fade
      />
    </Canvas>
  );
}
