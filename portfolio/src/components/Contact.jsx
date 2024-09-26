// src/components/Contact.jsx
import React from "react";
import { FaMailBulk, FaFileDownload } from "react-icons/fa";
import pdf from "../assets/kade-virgil-resume.pdf";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto scroll-mt-24 px-6 py-10 text-center"
    >
      <h2 className="mb-6 text-3xl font-bold text-white">Get In Touch</h2>
      <p className="mb-6 text-lg text-gray-400">
        I'm currently open to new opportunities. Whether you have a question or
        just want to say hi, I'll try my best to get back to you!
      </p>
      <div className="flex justify-center space-x-12">
        <motion.a
          href="mailto:kadevirgil@gmail.com"
          className="primary-btn text-sky-500 hover:text-white"
          whileHover={{
            boxShadow: "inset 6px 6px 24px 24px rgb(3 105 161)",
            scale: 1.025,
          }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me <FaMailBulk className="ml-2 hidden md:inline" />
        </motion.a>
        <motion.a
          href={pdf}
          download="Kade Virgil Resume.pdf"
          target="_blank"
          className="primary-btn text-sky-500 hover:text-white"
          whileHover={{
            boxShadow: "inset 6px 6px 24px 24px rgb(3 105 161)",
            scale: 1.025,
          }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume <FaFileDownload className="ml-2 hidden md:inline" />
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
