import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import pdf from "../../assets/Kade-Virgil-Resume.pdf";
import { motion } from "framer-motion";
import OutlineButton from "../../common/OutlineButton";

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
        delay: 0.5 + i * 0.05, // 2 second initial delay + stagger
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  return (
    <header
      className={`fixed w-full bg-gray-800 p-4 ${
        isScrolled ? "bg-opacity-90 shadow-lg" : "bg-opacity-0"
      } z-50 transition-all duration-300`}
    >
      <nav className="container mx-auto flex items-center justify-around">
        <ul className="hidden space-x-6 text-white md:flex md:space-x-10">
          {[
            { href: "#about", label: "About" },
            { href: "#education", label: "Education" },
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
              <FaLinkedin className="size-8" />
            </a>
          </motion.li>

          <motion.li
            custom={6}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              href="https://github.com/kadevirgil/portfolio"
              className="navlink-logo"
              target="_blank"
            >
              <FaGithub className="size-8" />
            </a>
          </motion.li>

          <motion.a
            custom={7}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            href={pdf}
            target="_blank"
            onClick={() => {
              window.open(pdf);
            }}
          >
            <OutlineButton className="border-sky-500 text-sky-500 hover:text-slate-800 before:bg-sky-500">
              My Resume
            </OutlineButton>
          </motion.a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
