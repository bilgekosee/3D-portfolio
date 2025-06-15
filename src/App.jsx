import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Card from "./components/Card/Card";

export default function App() {
  return (
    <>
      <Navbar />
      <About />
      <Card />
    </>
  );
}
