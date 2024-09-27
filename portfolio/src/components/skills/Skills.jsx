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
import { SectionHeader } from "../../common/SectionHeader";


// TODO: Add skills section inView animation

const Skills = () => {
  return (
    <motion.section
    initial={{ y: 48, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.75 }}
    viewport={{ once: true }}
    id="skills"
    className="container mx-auto scroll-mt-24"
    >
      <SectionHeader title="SKILLS" dir="r" />
      <ul className="grid grid-cols-2 gap-4 pt-5 md:grid-cols-3">
        {skills.map((skill, index) => (
          <li
          key={index}
          className="flex items-center space-x-3 rounded-lg bg-gray-800 p-4 transition-all duration-200 hover:scale-105 hover:bg-slate-600 hover:shadow-2xl"
          >
            <svg className="size-6 md:size-8">{skill.icon}</svg>
            <span className="text-sm md:text-md">{skill.name}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

const skills = [
  { name: "JavaScript", icon: <JavascriptOriginal /> },
  { name: "React", icon: <ReactOriginal /> },
  { name: "Node.js", icon: <NodejsOriginal /> },
  { name: "Express", icon: <ExpressOriginal /> },
  { name: "MongoDB", icon: <MongodbOriginal /> },
  { name: "Python", icon: <PythonOriginal /> },
  { name: "Django", icon: <DjangoPlain /> },
  { name: "HTML5", icon: <Html5Original /> },
  { name: "CSS3", icon: <Css3Original /> },
  { name: "SQLite", icon: <SqliteOriginal /> },
  { name: "Tailwind CSS", icon: <TailwindcssOriginal /> },
  { name: "React-Bootstrap", icon: <ReactbootstrapOriginal /> },
  { name: "Bootstrap", icon: <BootstrapOriginal /> },
  { name: "C++", icon: <CplusplusOriginal /> },
  { name: "MySQL", icon: <MysqlOriginal /> },
  { name: "C#", icon: <CsharpOriginal /> },
  { name: "Git", icon: <GitOriginal /> },
  { name: "Vite", icon: <VitejsOriginal /> },
  // Add more skills as needed
];
export default Skills;
