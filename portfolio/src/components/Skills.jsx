// src/components/Skills.jsx
import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiSqlite,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "React", icon: <SiReact />, color: "text-sky-400" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-400" },
  { name: "Express", icon: <SiExpress />, color: "text-black" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Python", icon: <SiPython />, color: "text-blue-400" },
  { name: "Django", icon: <SiDjango />, color: "text-white-400" },
  { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-400" },
  { name: "CSS3", icon: <SiCss3 />, color: "text-blue-400" },
  { name: "SQLite", icon: <SiSqlite />, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-blue-400" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "text-indigo-500" },
  // Add more skills as needed...
];

const Skills = () => {
  return (
    <section id="skills" className="container block mx-auto px-6">
      <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3 hover:shadow-2xl hover:bg-slate-600 hover:scale-105 transition-all duration-200 slide-in"
          >
            <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
