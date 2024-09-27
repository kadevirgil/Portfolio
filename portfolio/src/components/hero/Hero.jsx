import React from "react";
import Reveal from "../../common/Reveal";
import OutlineButton from "../../common/OutlineButton";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar.png";

const Hero = () => {
  return (
    <section className="overflow-hidden py-24 text-slate-100 md:py-32">
      <div className="container mx-auto scroll-mt-24 pt-2">
        <div className="flex flex-col items-center md:flex-row">
          <div className="pointer-events-none relative z-10 md:w-1/2">
            <Reveal>
              <h1 className="pointer-events-auto text-4xl font-black text-zinc-100 sm:text-6xl md:text-8xl">
                Hi, I'm Kade<span className="text-sky-500">.</span>
              </h1>
            </Reveal>
            <Reveal>
              <h2 className="pointer-events-auto my-2 text-xl text-zinc-300 sm:text-2xl md:my-4 md:text-4xl">
                I'm a{" "}
                <span className="font-semibold text-sky-500">
                  Software Developer <i>(In Training)</i>
                </span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="pointer-events-auto max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base md:leading-relaxed">
                I specialize in building web applications with React, Node.js,
                and MongoDB. I'm always looking for new opportunities to learn
                and grow. Currently, I am attending Weber State University for a
                Bachelor's Degree in Computer Science and will graduate in
                December 2024.
                <br />
                Actively seeking opportunities to work as a Software Developer.
              </p>
            </Reveal>
            <Reveal>
              <OutlineButton
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView();
                }}
                className="pointer-events-auto mt-4 border-sky-500 bg-sky-500 text-zinc-100 before:bg-sky-700 hover:border-sky-700 hover:text-white md:mt-6"
              >
                Contact Me
              </OutlineButton>
            </Reveal>
          </div>
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              type: "spring",
              duration: 1,
              delay: 0.5,
            }}
            className="mt-24 md:ml-6 md:mt-0 md:-1/2 lg:ml-8 lg:mt-0 lg:w-3/4"
          >
            <img
              src={avatar}
              alt="Picture of me"
              className="hidden md:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
