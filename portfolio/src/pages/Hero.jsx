// src/components/Hero.jsx
import React from "react";
// Import motion from framer motion to create animations
import { motion } from "framer-motion";

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
        duration: 0.5,
        delay: i / 15,
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
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-4xl font-bold text-white md:text-6xl"
      >
        Hi, I'm Kade
        <span className="pl-1 text-6xl text-sky-400 md:text-8xl">.</span>
      </motion.h1>

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
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        <motion.a
          href="ailto:kadevirgil@gmail.com"
          className="primary-btn flex items-center"
          initial={{ border: "1px solid black" }}
          whileHover={{
            boxShadow: "-10px 10px black",
            scale: 1.025,
          }}
          whileTap={{ boxShadow: "0px 0px black", scale: 1 }}
          transition={{
            ease: "backInOut",
            type: "spring",
            damping: 15,
          }}
        >
          Contact Me
          <span className="pl-2 text-sky-400">--&gt;</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
