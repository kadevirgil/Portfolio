// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
// Icons for social media links
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
// Import Resume pdf from assets folder
import pdf from "../assets/kade-virgil-resume.pdf";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full p-4 bg-gray-800 ${
        isScrolled ? "bg-opacity-90 shadow-lg" : "bg-opacity-0"
      } transition-all duration-300 z-50`}
    >
      <nav className="container mx-auto flex justify-around items-center scroll-smooth">
        <ul className="hidden md:flex space-x-6 md:space-x-10 text-white">
          <li>
            <a href="#hero" className="navlink">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="navlink">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="navlink">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="navlink">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="navlink">
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kade-virgil-a6522a285/"
              className="navlink"
              target="_blank"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kadevirgil/Portfolio"
              className="navlink"
              target="_blank"
            >
              <FaGithub className="w-8 h-8" />
            </a>
          </li>
          <a href={pdf} download="Kade Virgil Resume.pdf" target="_blank">
            <li className="nav-btn">
              Resume <FaFileDownload className="w-6 inline mb-1" />
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
