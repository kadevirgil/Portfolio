// src/App.jsx
import React from "react";
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
    <div className="flex flex-col min-h-screen bg-gray-900 font-sans text-gray-300">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 overflow-x-hidden items-center justify-center px-6 md:px-16">
          <section className="hero-section">
            <Hero />
          </section>
          <section className="about-section">
            <About />
          </section>
          <section className="education-section">
            <Education />
          </section>
          <section className="projects-section">
            <Projects />
          </section>
          <section className="skills-section">
            <Skills />
          </section>
          <section className="contact-section">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;