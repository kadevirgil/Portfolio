// src/components/Projects.jsx
import React from "react";
// Import gifs for projects
import hair from "../../assets/hair-by-sarah.gif";
import bank from "../../assets/banking-app.gif";
import hangman from "../../assets/hangman-game.gif";
import connect4 from "../../assets/connect-4.gif";
// Import ProjectsCarousel component for displaying projects
import ProjectsCarousel from "./ProjectsCarousel";
// Import SectionHeader component for displaying section header
import { SectionHeader } from "../../common/SectionHeader";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto scroll-mt-24 pt-6">
      <SectionHeader title="PROJECTS" dir="l" className="pt-6" />
      <ProjectsCarousel projects={projects} />
    </section>
  );
};

const projects = [
  {
    title: "Hair by Sarah",
    description:
      "React web application using Bootstrap for a hair styling website. With a responsive design and user-friendly interface.",
    image: hair,
    link: "https://github.com/kadevirgil/portfolio/tree/main/projects/hair-by-sarah",
    live: "https://hairbysarah.netlify.app/",
    skills: ["React", "React-Bootstrap", "Bootstrap"],
  },
  {
    title: "Banking Application",
    description:
      "A full-stack banking application using the MERN stack. Includes user authentication and account management.",
    image: bank,
    link: "https://github.com/kadevirgil/portfolio/tree/main/projects/Banking-App",
    skills: ["MERN", "Bootstrap", "React-Bootstrap"],
  },
  {
    title: "Hangman",
    description:
      "A hangman game built with the MERN stack. The game fetches random words from a database and stores highscores in a leaderboard.",
    image: hangman,
    link: "https://github.com/yourusername/weather-dashboard",
    skills: ["React", "MongoDB", "Express", "Node.js"],
  },
  {
    title: "Connect-4",
    description:
      "A connect-4 game built with React. The game allows two players to play against each other and determine a winner.",
    image: connect4,
    link: "https://github.com/kadevirgil/portfolio/tree/main/projects/connect-4",
    skills: ["React", "CSS"],
  },
];

export default Projects;
