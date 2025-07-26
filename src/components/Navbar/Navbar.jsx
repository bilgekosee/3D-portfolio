import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, useGLTF } from "@react-three/drei";
import "./Navbar.css";

function Logo3D() {
  const { scene } = useGLTF("./computerDesk.glb");
  const ref = React.useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return <primitive object={scene} ref={ref} scale={0.9} />;
}

function StarBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars
        radius={150}
        depth={80}
        count={8000}
        factor={2}
        saturation={0}
        fade
      ></Stars>
    </Canvas>
  );
}
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="canvas-background">
        <StarBackground />
      </div>
      <div className="navbar-wrapper">
        <div className="model-wrapper">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight />
            <directionalLight position={[1, 1, 1]} />
            <Logo3D />
          </Canvas>
        </div>
        <div className="content">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
