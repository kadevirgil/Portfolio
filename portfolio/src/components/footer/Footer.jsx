// src/components/Footer.jsx
import React from "react";

// Github and LinkedIn icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 text-center">
      <p className="text-gray-400">
        <a
          href="https://github.com/kadevirgil/Portfolio"
          className="footer-links"
          target="_blank"
        >
          <FaGithub className="mb-4 mr-4 inline size-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/kade-virgil-a6522a285/"
          className="footer-links"
          target="_blank"
        >
          <FaLinkedin className="mb-4 mr-4 inline size-8" />
        </a>
      </p>
      <p className="text-gray-400">© 2024 Kade Virgil. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
