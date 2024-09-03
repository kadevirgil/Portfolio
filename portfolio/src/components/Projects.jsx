// src/components/Projects.jsx
import React from "react";
import hair from "../assets/hair-by-sarah.gif";
import bank from "../assets/banking-app.gif";

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
      "A full-stack banking application using React, Node.js, Express, and MongoDB.",
    image: bank,
    link: "https://github.com/kadevirgil/Portfolio/tree/main/Banking-App",
    skills: ["React", "Node.js", "Express", "MongoDB", "Bootstrap", "React-Bootstrap"],
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              {project.title}
            </h3>
            <a
              href={project.live ? project.live : project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-contain mb-2"
              />
            </a>
            <p className="text-gray-400 mb-4">{project.description}</p>
            
            {/* Skills List */}
            <ul className="flex flex-wrap mb-4">
              {project.skills && project.skills.map((skill, skillIndex) => (
                <li
                  key={`${projectIndex}-${skillIndex}`}
                  className="bg-opacity-50 bg-sky-900 text-sky-400 px-4 py-2 mr-2 mb-2 rounded-3xl font-serif hover:bg-opacity-90 transition-all duration-200"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <a href={project.link} className="navlink mr-4" target="_blank">
              View Project
            </a>
            {project.live && (
              <a
                href={project.live}
                className="navlink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live App
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
