import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const EarthModel = () => {
  const gltf = useGLTF("/earth.glb");
  const earthRef = useRef();

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <primitive
      ref={earthRef}
      object={gltf.scene}
      scale={9}
      position={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate={false} />
      <EarthModel />
    </Canvas>
  );
};

export default EarthCanvas;
