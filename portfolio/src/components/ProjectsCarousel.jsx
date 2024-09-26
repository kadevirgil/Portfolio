import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 400;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

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
    <section className="py-8 flex justify-center" ref={ref}>
      <div className="relative overflow-hidden p-4 w-full">
        <div className="mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
            <div className="flex items-center gap-1">
              <button
                className={`rounded-lg border-1 border-sky-800 bg-gray-950 text-sky-400 hover:bg-gray-800 transition-all duration-200 p-1.5 text-2xl ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-1 border-sky-800 bg-gray-950 text-sky-400 hover:bg-gray-800 transition-all duration-200 p-1.5 text-2xl ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
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
      </div>
    </section>
  );
};

const Project = ({ image, title, description, link, live, skills }) => {
  return (
    <motion.div
      className="relative shrink-0 cursor-pointer bg-slate-800 p-4 rounded-lg"
      // Add hover effect to project cards
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 250 }}
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <img
        src={image}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a fake blog post titled ${title}`}
      />
      <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
        {title}
      </h4>
      <p className="relative z-10 text-slate-400 mb-4">{description}</p>
      <div className="relative z-10 flex flex-wrap justify-start text-sky-500">
        {skills.join(" - ")}
      </div>
      <div className="relative z-10 mt-4 flex space-x-4">
        <a href={link} target="_blank" rel="noreferrer" className="navlink">
          Source Code
        </a>
        {live && (
          <a href={live} target="_blank" rel="noreferrer" className="navlink">
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectsCarousel;
