import "./Footer.css";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, useGLTF } from "@react-three/drei";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { SiUpwork } from "react-icons/si";
import { GiSushis } from "react-icons/gi";

function StarBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars
        radius={150}
        depth={80}
        count={8000}
        factor={6}
        saturation={0}
        fade
      ></Stars>
    </Canvas>
  );
}
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="canvas-background">
        <StarBackground />
      </div>
      <div className="portfolio-wrapper">
        <div className="portfolio-info">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="social-media">
        <div className="social-wrapper">
          <a
            href="https://www.linkedin.com/in/bilgekosee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ color: "#0077B5" }} />
          </a>

          <a
            href="https://github.com/bilgekosee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt style={{ color: "#4078c0" }} />
          </a>

          <a
            href="mailto:bilge.koosee@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMdMailUnread style={{ color: "#eb1a40" }} />
          </a>

          <a
            href="https://www.upwork.com/freelancers/~01a6c7a5b2e7f8924a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiUpwork style={{ color: "#14A800" }} />
          </a>

          <a
            href="https://bilge-k0see.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GiSushis style={{ color: "#ff7f00" }} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
