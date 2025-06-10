import React, { useState, useEffect } from "react";
import "./App.css";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

function Box() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
function MyText() {
  return (
    <Text
      fontSize={1}
      color="white"
      position={[0, -3, 0]}
      anchorX="center"
      anchorY="middle"
    >
      3D PORTFOY
    </Text>
  );
}

function LaptopModel(props) {
  const gltf = useGLTF("/computerDesk.glb");
  return <primitive object={gltf.scene} scale={1.5} position={[2, 0, 0]} />;
}

function CameraController({ scrollY }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.y = -scrollY * 0.01;
  }, [scrollY]);

  return null;
}

function DynamicText({ scrollY }) {
  if (scrollY < 200) {
    return (
      <Text fontSize={1} position={[0, 0, 0]}>
        Merhaba, ben Bilge 👩‍💻
      </Text>
    );
  } else if (scrollY < 600) {
    return (
      <Text fontSize={1} position={[0, -5, 0]}>
        Projelerim 💼
      </Text>
    );
  } else if (scrollY < 1000) {
    return (
      <Text fontSize={1} position={[0, -10, 0]}>
        Hakkımda 🧠
      </Text>
    );
  } else {
    return (
      <Text fontSize={1} position={[0, -15, 0]}>
        İletişim 🚀
      </Text>
    );
  }
}
export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "4000px", background: "#111" }}>
      <Canvas camera={{ position: [4, 4, 4] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        <LaptopModel />
        <DynamicText scrollY={scrollY} />
        <CameraController scrollY={scrollY} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
