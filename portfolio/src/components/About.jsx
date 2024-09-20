// src/components/About.jsx
import React, { useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const About = () => {
  const h2Ref = useRef(null);
  const pRef = useRef(null); 
  const isH2InView = useInView(h2Ref, { once: true, margin: "-100px" });
  const isPInView = useInView(pRef, { once: true, margin: "-50px" });
  

  return (
    <section
      id="about"
      className="container mx-auto px-6 overflow-scroll scroll-m-24"
    >
      <motion.h2
        ref={h2Ref}
        initial={{ x: -400, opacity: 0 }}
        animate={isH2InView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: "spring", damping: 30 }}
        className="text-3xl font-bold text-white mb-6"
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <motion.div
          initial={{ y: 200, scale: 0, opacity: 0 }}
          animate={isH2InView ? { y: 0, scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", damping: 20 }}
        >
          <FaUserCircle className="w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-0 md:mr-8" />
        </motion.div>
        <motion.p
          ref={pRef}
          initial={{ opacity: 0, x: 400 }}
          animate={isPInView ? { opacity: 1, x: 0 } : {}}
          transition={{ type:"spring", damping: 30 }}
          className="text-xl text-gray-400"
        >
          I'm a Fullstack Developer with a passion for creating efficient and
          scalable web applications. With a solid foundation in both front-end
          and back-end technologies, I love bringing ideas to life in the
          browser.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
