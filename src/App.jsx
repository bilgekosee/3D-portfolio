import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Card from "./components/Card/Card";
import Projects from "./components/Projects/Project";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <About />
      <Card />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
