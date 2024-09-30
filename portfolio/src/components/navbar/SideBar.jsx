import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SideBarLink from "./SideBarLink";

export const SideBar = () => {
  const [currentViewSection, setCurrentViewSection] = useState("");

  // Use effect for selecting the current view section
  // as the user scrolls through the page
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentViewSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="no-scrollbar sticky selection:left-0 top-0 z-20 flex h-screen flex-col items-center py-0 my-0 bg-opacity-50 bg-gray-800 w-12 md:w-16"
    >
      <SideBarLink
        selected={currentViewSection}
        setSelected={setCurrentViewSection}
        href="#about"
        value="about"
        className="px-4"
      >
        About
      </SideBarLink>
      <SideBarLink
        selected={currentViewSection}
        setSelected={setCurrentViewSection}
        href="#education"
        value="education"
      >
        Education
      </SideBarLink>
      <SideBarLink
        selected={currentViewSection}
        setSelected={setCurrentViewSection}
        href="#projects"
        value="projects"
      >
        Projects
      </SideBarLink>
      <SideBarLink
        selected={currentViewSection}
        setSelected={setCurrentViewSection}
        href="#skills"
        value="skills"
      >
        Skills
      </SideBarLink>
      <SideBarLink
        selected={currentViewSection}
        setSelected={setCurrentViewSection}
        href="#contact"
        value="contact"
      >
        Contact
      </SideBarLink>
    </motion.nav>
  );
};

export default SideBar;
