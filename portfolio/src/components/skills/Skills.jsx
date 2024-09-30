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
  FramermotionOriginal,
  SqlitePlain,
  TailwindcssOriginal,
  ReactbootstrapOriginal,
  BootstrapOriginal,
  CplusplusOriginal,
  MysqlOriginal,
  CsharpOriginal,
  GitOriginal,
  VitejsOriginal,
} from "devicons-react";
// Devicons GitHub icon won't let me change the fill color
// So I'm using the react-icons GitHub icon instead
import { FaGithub } from "react-icons/fa";
// Import SectionHeader component for displaying section header
import { SectionHeader } from "../../common/SectionHeader";
// Import Reveal component for animations
import Reveal from "../../common/Reveal";

const skillsRow1 = [
  { name: "JavaScript", icon: <JavascriptOriginal size={50} /> },
  { name: "React", icon: <ReactOriginal size={50} /> },
  { name: "Node.js", icon: <NodejsOriginal size={50} /> },
  { name: "Express", icon: <ExpressOriginal size={50} fill="slategray" /> },
  { name: "MongoDB", icon: <MongodbOriginal size={50} /> },
  { name: "Python", icon: <PythonOriginal size={50} /> },
  { name: "Django", icon: <DjangoPlain size={50} /> },
  {
    name: "Framer Motion",
    icon: <FramermotionOriginal size={50} fill="white" />,
  },
  { name: "SQLite", icon: <SqlitePlain size={50} /> },
];

const skillsRow2 = [
  { name: "Tailwind CSS", icon: <TailwindcssOriginal size={50} /> },
  { name: "React-Bootstrap", icon: <ReactbootstrapOriginal size={50} /> },
  { name: "Bootstrap", icon: <BootstrapOriginal size={50} /> },
  { name: "C++", icon: <CplusplusOriginal size={50} /> },
  { name: "MySQL", icon: <MysqlOriginal size={50} /> },
  { name: "C#", icon: <CsharpOriginal size={50} /> },
  { name: "Git", icon: <GitOriginal size={50} /> },
  { name: "Vite", icon: <VitejsOriginal size={50} /> },
  { name: "GitHub", icon: <FaGithub size={50} fill="white" /> },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto">
        <SectionHeader title="SKILLS" dir="r" />
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col pt-4"
        >
          <div className="flex overflow-hidden">
            <TranslateWrapper>
              <SkillItems skills={skillsRow1} />
            </TranslateWrapper>
            <TranslateWrapper>
              <SkillItems skills={skillsRow1} />
            </TranslateWrapper>
            <TranslateWrapper>
              <SkillItems skills={skillsRow1} />
            </TranslateWrapper>
          </div>
          <div className="flex overflow-hidden">
            <TranslateWrapper reverse>
              <SkillItems skills={skillsRow2} />
            </TranslateWrapper>
            <TranslateWrapper reverse>
              <SkillItems skills={skillsRow2} />
            </TranslateWrapper>
            <TranslateWrapper reverse>
              <SkillItems skills={skillsRow2} />
            </TranslateWrapper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{
        duration: 50,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const SkillItem = ({ icon, name }) => {
  return (
    <div className="flex size-40 flex-col items-center justify-center transition-all duration-200 hover:bg-gray-800">
      <div className="text-4xl">{icon}</div>
      <p className="mt-2 text-xl">{name}</p>
    </div>
  );
};

const SkillItems = ({ skills }) => (
  <>
    {skills.map((skill, index) => (
      <SkillItem key={index} icon={skill.icon} name={skill.name} />
    ))}
  </>
);

export default Skills;
