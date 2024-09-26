// src/components/Projects.jsx
import React from "react";
// Import gifs for projects
import hair from "../assets/hair-by-sarah.gif";
import bank from "../assets/banking-app.gif";
// Import motion for view animations
import { motion } from "framer-motion";
import ProjectsCarousel from "./ProjectsCarousel";

const projects = [
  {
    title: "Hair by Sarah",
    description:
      "React web application using Bootstrap for a hair styling website. With a responsive design and user-friendly interface.",
    image: hair,
    link: "https://github.com/kadevirgil/Portfolio/tree/main/hair-by-sarah-copy",
    live: "https://hairbysarah.netlify.app/",
    skills: ["React", "React-Bootstrap", "Bootstrap"],
  },
  {
    title: "Banking Application",
    description:
      "A full-stack banking application using React, Node.js, Express, and MongoDB. Includes user authentication and account management.",
    image: bank,
    link: "https://github.com/kadevirgil/Portfolio/tree/main/Banking-App",
    skills: ["MERN Stack", "Bootstrap", "React-Bootstrap"],
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard application that provides current weather information and forecasts using the OpenWeatherMap API.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/yourusername/weather-dashboard",
    live: "https://weatherdashboard.netlify.app/",
    skills: ["React", "API", "CSS"],
  },
  {
    title: "E-commerce Store",
    description:
      "An e-commerce store built with React and Redux for state management, featuring a shopping cart and product listings.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/yourusername/e-commerce-store",
    live: "https://ecommercestore.netlify.app/",
    skills: ["React", "Redux", "CSS"],
  },
  {
    title: "Task Manager",
    description:
      "A task management application to keep track of daily tasks, built with React and Firebase for real-time updates.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/yourusername/task-manager",
    live: "https://taskmanager.netlify.app/",
    skills: ["React", "Firebase", "CSS"],
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.75,
        once: true,
        type: "spring",
      }}
      className="container mx-auto scroll-mt-24 px-3"
    >
      <ProjectsCarousel projects={projects} />
    </motion.section>
  );
};

export default Projects;
