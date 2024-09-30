// src/App.jsx
import React from "react";
// Import components for the portfolio
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import SideBar from "./components/navbar/SideBar";
import Header from "./components/navbar/Header";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 font-sans text-gray-300">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 items-center justify-center overflow-x-hidden px-6 md:px-16">
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
