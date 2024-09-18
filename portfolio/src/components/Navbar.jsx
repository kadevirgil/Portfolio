import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import pdf from "../assets/kade-virgil-resume.pdf";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variants for staggering and sliding animation
  const navItemVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 1 + i * 0.05, // 2 second initial delay + stagger
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <header
      className={`fixed w-full p-4 bg-gray-800 ${
        isScrolled ? "bg-opacity-90 shadow-lg" : "bg-opacity-0"
      } transition-all duration-300 z-50`}
    >
      <nav className="container mx-auto flex justify-around items-center">
        <ul className="hidden md:flex space-x-6 md:space-x-10 text-white">
          {[
            { href: "#hero", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#projects", label: "Projects" },
            { href: "#skills", label: "Skills" },
            { href: "#contact", label: "Contact" },
          ].map((item, i) => (
            <motion.li
              key={i}
              custom={i} // index for staggering
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <a href={item.href} className="navlink">
                {item.label}
              </a>
            </motion.li>
          ))}

          <motion.li
            custom={5}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              href="https://www.linkedin.com/in/kade-virgil-a6522a285/"
              className="navlink-logo"
              target="_blank"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </motion.li>

          <motion.li
            custom={6}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              href="https://github.com/kadevirgil/Portfolio"
              className="navlink-logo"
              target="_blank"
            >
              <FaGithub className="w-8 h-8" />
            </a>
          </motion.li>

          <motion.a
            custom={7}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            href={pdf}
            download="Kade Virgil Resume.pdf"
            target="_blank"
          >
            <li className="nav-btn">
              Resume <FaFileDownload className="w-6 inline mb-1" />
            </li>
          </motion.a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
