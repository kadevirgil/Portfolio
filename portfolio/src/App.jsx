// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="scroll-smooth bg-gray-900 font-sans text-gray-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
