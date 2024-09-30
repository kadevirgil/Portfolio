import React, { useState } from "react";
// Import motion for animations
import { motion } from "framer-motion";
// Icons from react-icons
import {
  FiArrowLeft,
  FiArrowRight,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
// Import useMeasure for measuring the width of the carousel
import useMeasure from "react-use-measure";
// Reveal component for animation revealing the carousel
import { Reveal } from "../../common/Reveal";

// Main constants for the carousel
const CARD_WIDTH = 325;
const MARGIN = 15;
const CARD_SIZE = CARD_WIDTH + MARGIN;
// Breakpoints for sizing the carousel
const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};


// DESCRIPTION: ProjectsCarousel component for displaying the projects carousel
// PROPS: projects,
// projects: Array of project objects, loops through each project and displays
//            using the Project component 
const ProjectsCarousel = ({ projects }) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (projects.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section id="project-carousel" className="flex justify-center pb-8" ref={ref}>
      <div className="relative w-full overflow-hidden">
        <Reveal>
          <div className="mx-auto">
            <div className="mb-4 flex gap-1 pt-4">
              <button
                className={`rounded-lg bg-gray-950 p-1.5 text-4xl text-sky-400 transition-all duration-200 hover:bg-gray-800 active:scale-90 ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg bg-gray-950 p-1.5 text-4xl text-sky-400 transition-all duration-200 hover:bg-gray-800 active:scale-90 ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
            <motion.div
              animate={{
                x: offset,
              }}
              transition={{
                ease: "easeInOut",
              }}
              className="flex"
            >
              {projects.map((project, index) => {
                return <Project key={index} {...project} />;
              })}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// DESCRIPTION: Project component for displaying a single project
// PROPS: image, title, description, link, live, skills
// image: Image source for the project
// title: Title of the project
// description: Description of the project
// link: Link to the GitHub repository
// live: Link to the live project, if applicable
// skills: Array of skills used in the project
const Project = ({ image, title, description, link, live, skills }) => {
  return (
    <motion.div
      className="relative shrink-0 rounded-lg bg-slate-800 p-4"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <img
        src={image}
        className="mb-3 h-[200px] w-full rounded-lg object-fit"
        alt={`Image for my ${title} project`}
      />
      <h4 className="relative z-10 text-xl font-bold text-slate-50">{title}</h4>
      <div className="flex w-full items-center gap-2">
        <div className="h-[1px] w-full bg-zinc-600" />
        <a
          target="_blank"
          rel="nofollow"
          href={link}
          className="relative z-10 cursor-pointer text-slate-500 transition-colors hover:text-sky-300"
        >
          <FiGithub className="inline size-5" />
        </a>
        {live && (
          <a
            target="_blank"
            rel="nofollow"
            href={live}
            className="relative z-10 cursor-pointer text-slate-500 transition-colors hover:text-sky-300"
          >
            <FiExternalLink className="inline size-6" />
          </a>
        )}
      </div>
      <div className="h-24 my-2">
        <p className="text-pretty text-slate-300">{description}</p>
      </div>
      <div className="relative z-10 flex flex-wrap justify-start rounded-lg text-sky-400">
        {skills.join(" / ")}
      </div>
    </motion.div>
  );
};

export default ProjectsCarousel;
