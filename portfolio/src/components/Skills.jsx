// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  JavascriptOriginal,
  ReactOriginal,
  NodejsOriginal,
  ExpressOriginal,
  MongodbOriginal,
  PythonOriginal,
  DjangoPlain,
  Html5Original,
  Css3Original,
  SqliteOriginal,
  TailwindcssOriginal,
  ReactbootstrapOriginal,
  CplusplusOriginal,
  MysqlOriginal,
  CsharpOriginal,
  GitOriginal,
  VitejsOriginal,
  BootstrapOriginal,
} from "devicons-react";

const skills = [
  { name: "JavaScript", icon: <JavascriptOriginal size={35} /> },
  { name: "React", icon: <ReactOriginal size={35} /> },
  { name: "Nodejs", icon: <NodejsOriginal size={35} /> },
  { name: "Express", icon: <ExpressOriginal size={35} /> },
  { name: "MongoDB", icon: <MongodbOriginal size={35} /> },
  { name: "Python", icon: <PythonOriginal size={35} /> },
  { name: "Django", icon: <DjangoPlain size={35} /> },
  { name: "HTML5", icon: <Html5Original size={35} /> },
  { name: "CSS3", icon: <Css3Original size={35} /> },
  { name: "SQLite", icon: <SqliteOriginal size={35} /> },
  { name: "Tailwind CSS", icon: <TailwindcssOriginal size={35} /> },
  { name: "React-Bootstrap", icon: <ReactbootstrapOriginal size={35} /> },
  { name: "Bootstrap", icon: <BootstrapOriginal size={35} /> },
  { name: "C++", icon: <CplusplusOriginal size={35} /> },
  { name: "MySQL", icon: <MysqlOriginal size={35} /> },
  { name: "C#", icon: <CsharpOriginal size={35} /> },
  { name: "Git", icon: <GitOriginal size={35} /> },
  { name: "Vite", icon: <VitejsOriginal size={35} /> },
  // Add more skills as needed
];

// TODO: Add skills section inView animation

const Skills = () => {
  return (
    <motion.section
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      viewport={{ once: true }}
      id="skills"
      className="container mx-auto px-6 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3 hover:shadow-2xl hover:bg-slate-600 hover:scale-105 transition-all duration-200"
          >
            <span>{skill.icon}</span>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;
