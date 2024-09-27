import React, { useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

// Import SectionHeader component
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

const About = () => {
  const h2Ref = useRef(null);
  const imgRef = useRef(null);
  const pRef = useRef(null);
  const isH2InView = useInView(h2Ref, { once: true, amount: "all" });
  const isImgInView = useInView(imgRef, { once: true, amount: "some" });
  const isPInView = useInView(pRef, { once: true, amount: "some" });

  return (
    <section id="about" className="container mx-auto scroll-mt-24 px-6 pt-2">
      <SectionHeader title="ABOUT" dir="l" />
      <div className="mb-8 flex flex-col items-center md:flex-row">
        <div className="mb-6 md:mb-0 md:mr-8">
          <Reveal>
            <FaUserCircle className="h-32 w-32 md:h-48 md:w-48" />
          </Reveal>
        </div>
        <div>
          <Reveal>
            <motion.p
              animate={isPInView ? "visible" : ""}
              className="text-xl text-gray-400"
            >
              I'm a Fullstack Developer with a passion for creating efficient
              and scalable web applications. With a solid foundation in both
              front-end and back-end technologies, I love bringing ideas to life
              in the browser.
              <br /> I am currently pursuing a Bachelor's Degree in Computer
              Science, with my expected graduation date to be Fall 2024.
            </motion.p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
