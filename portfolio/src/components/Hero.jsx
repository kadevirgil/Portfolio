// src/components/Hero.jsx
import React from "react";
// Import motion from framer motion to create animations
import { motion } from "framer-motion";

const Hero = () => {
  const text =
    "I'm a fullstack developer specializing in building exceptional web applications.".split(
      ""
    );

  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-800 to-gray-900 cursor-default"
    >
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi, I'm <span className="text-accent">Kade Virgil</span>
        </h1>
      </motion.h1>
      <p className="mt-4 text-lg md:text-xl text-gray-400">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 50,
            }}
            key={i}
          >
            {el}
          </motion.span>
        ))}
      </p>
      <motion.div
        initial={{ x: 200, opacity: 0, filter: "blur(10px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 2, type: "spring" }}
      >
        <motion.a
          href="#about"
          className="primary-btn flex items-center"
          whileHover={{
            boxShadow: "inset 6px 6px 24px 24px rgb(3 105 161)",
            scale: 1.2,
          }}
          whileTap={{ scale: 0.9 }}
        >
          View My Work
          <span className="text-sky-400 pl-2">--&gt;</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
