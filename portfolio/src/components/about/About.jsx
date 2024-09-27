import React from "react";
import { FaUserCircle } from "react-icons/fa";
// Import SectionHeader component
import { SectionHeader } from "../../common/SectionHeader";
import Reveal from "../../common/Reveal";
import { AiFillCode } from "react-icons/ai";

const About = () => {
  return (
    <section id="about" className="container mx-auto scroll-mt-24 px-6 pt-2">
      <SectionHeader title="ABOUT" dir="l" />
      <div className="mb-8 flex flex-col items-center md:flex-row">
        <div className="mb-6 mt-2 md:mb-0 md:mr-8">
          <Reveal>
            <FaUserCircle className="h-32 w-32 md:h-48 md:w-48" />
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-8 text-lg text-gray-400 md:grid-cols-2 md:text-xl">
          <Reveal>
            <p>
              I'm a Fullstack Developer with a passion for creating efficient
              and scalable web applications. With a solid foundation in both
              front-end and back-end technologies, I love bringing ideas to life
              in the browser.
            </p>
          </Reveal>
          <Reveal>
            <div>
              <h4 className="mb-6 flex items-center font-bold text-white">
                <AiFillCode className="mr-2 text-2xl text-sky-400" />
                Use for fun
              </h4>
              <div className="flex flex-wrap gap-2">
                {tech.map((course, index) => (
                  <span
                    key={index}
                    className="text-sm rounded-lg bg-sky-900 bg-opacity-50 px-2 py-1 text-sky-400"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const tech = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "Tailwind CSS",
  "Framer Motion",
];

export default About;
