// src/components/Projects.jsx
import React from "react";

// Import more images as needed
import hair from "../assets/hair-by-sarah.gif";
import bank from "../assets/banking-app.gif";

const projects = [
  {
    title: "Hair by Sarah",
    description:
      "React web application using Bootstrap for a hair styling website. With a resposive design and user-friendly interface.",
    image: hair,
    link: "https://github.com/kadevirgil/Portfolio/tree/main/hair-by-sarah-copy",
  },
  {
    title: "Banking Application",
    description:
      "A full-stack banking application using React, Node.js, Express, and MongoDB.",
    image: bank,
    link: "https://github.com/kadevirgil/Portfolio/tree/main/Banking-App",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              {project.title}
            </h3>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-contain mb-2"
            />
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a href={project.link} className="navlink" target="_blank">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
