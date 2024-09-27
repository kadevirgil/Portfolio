// src/components/Hero.jsx
import React from "react";
// Import motion from framer motion to create animations
import { motion } from "framer-motion";
import Reveal from "../../common/Reveal";
import OutlineButton from "../../common/OutlineButton";

const Hero = () => {
  const desc_text =
    "I'm a Full Stack Developer specializing in building exceptional web applications.".split(
      " ",
    );

  const textVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: i / 10,
        type: "spring",
        stiffness: 150,
      },
    }),
  };

  return (
    <section
      id="hero"
      className="flex h-screen cursor-default flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 text-center"
    >
      <Reveal>
        <h1 className="text-6xl font-bold text-white md:text-8xl">
          Hi, I'm Kade
          <span className="text-sky-400">.</span>
        </h1>
      </Reveal>
      <p className="mt-4 text-lg text-gray-400 md:text-xl">
        {desc_text.map((word, i) => (
          <motion.span
            variants={textVariants}
            initial="hidden"
            animate="visible"
            key={i}
            custom={i}
            className={
              word == "Full" || word == "Stack" || word == "Developer"
                ? "inline-block pr-2 text-sky-400 md:text-3xl"
                : "inline-block pr-2 text-xl md:text-3xl"
            }
          >
            {word}
          </motion.span>
        ))}
      </p>
      <motion.div
        initial={{ x: 100, opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.25, type: "spring", stiffness: 125 }}
      >
        <OutlineButton
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView();
          }}
          className="text-xl pointer-events-auto mt-4 border-sky-600 bg-sky-600 text-zinc-100 before:bg-sky-700 hover:border-sky-700 hover:text-white md:mt-6"
        >
          Contact Me
        </OutlineButton>
      </motion.div>
    </section>
  );
};

export default Hero;
