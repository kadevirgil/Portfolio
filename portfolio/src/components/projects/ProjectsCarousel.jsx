import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { Reveal } from "../../common/Reveal";

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
    <section className="flex justify-center pb-8" ref={ref}>
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

const Project = ({ image, title, description, link, live, skills }) => {
  return (
    <motion.div
      className="relative shrink-0 cursor-pointer rounded-lg bg-slate-800 p-4"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <img
        src={image}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`Image for my ${title} project`}
      />
      <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
        {title}
      </h4>
      <p className="relative z-10 mb-4 text-slate-400">{description}</p>
      <div className="relative z-10 flex flex-wrap justify-start rounded-lg text-sky-400">
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
