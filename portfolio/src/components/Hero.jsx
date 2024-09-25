// src/components/Hero.jsx
import React from "react";
// Import motion from framer motion to create animations
import { motion } from "framer-motion";

const Hero = () => {
  const desc_text =
    "I'm a Full Stack Developer specializing in building exceptional web applications.".split(
      " "
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
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-800 to-gray-900 cursor-default"
    >
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-4xl md:text-6xl font-bold text-white"
      >
        Hi, I'm Kade
        <span className="text-sky-400 text-6xl md:text-8xl pl-1">.</span>
      </motion.h1>

      <p className="mt-4 text-lg md:text-xl text-gray-400">
        {desc_text.map((word, i) => (
          <motion.span
            variants={textVariants}
            initial="hidden"
            animate="visible"
            key={i}
            custom={i}
            className={
              word == "Full" || word == "Stack" || word == "Developer"
                ? "text-sky-400 md:text-3xl inline-block pr-2"
                : "text-xl md:text-3xl inline-block pr-2"
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
          <span className="text-sky-400 pl-2">--&gt;</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
