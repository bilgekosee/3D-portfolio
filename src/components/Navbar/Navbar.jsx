import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
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
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="model-wrapper">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight />
            <directionalLight position={[1, 1, 1]} />
            <Logo3D />
          </Canvas>
        </div>
        <div className="content">
          <span>About</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
