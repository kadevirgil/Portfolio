// src/components/Projects.jsx
import React from "react";
// Import gifs for projects
import hair from "../../assets/hair-by-sarah.gif";
import bank from "../../assets/banking-app.gif";
import ProjectsCarousel from "./ProjectsCarousel";
import { SectionHeader } from "../../common/SectionHeader";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto scroll-mt-24 pt-6">
      <SectionHeader title="PROJECTS" dir="l" className="pt-6" />
      <ProjectsCarousel projects={projects} />
    </section>
  );
};

// TODO: Add connect-4 and hangman to projects array

const projects = [
  {
    title: "Hair by Sarah",
    description:
      "React web application using Bootstrap for a hair styling website. With a responsive design and user-friendly interface.",
    image: hair,
    link: "https://github.com/kadevirgil/portfolio/tree/main/projects/hair-by-sarah%20-%20Copy",
    live: "https://hairbysarah.netlify.app/",
    skills: ["React", "React-Bootstrap", "Bootstrap"],
  },
  {
    title: "Banking Application",
    description:
      "A full-stack banking application using the MERN stack. Includes user authentication and account management.",
    image: bank,
    link: "https://github.com/kadevirgil/portfolio/tree/main/Banking-App",
    skills: ["MERN", "Bootstrap", "React-Bootstrap"],
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

export default Projects;
