// src/components/Contact.jsx
import React from "react";
import { FaMailBulk, FaFileDownload } from "react-icons/fa";
import pdf from "../assets/kade-virgil-resume.pdf";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-10 px-6 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
      <p className="text-lg text-gray-400 mb-6">
        I'm currently open to new opportunities. Whether you have a question or
        just want to say hi, I'll try my best to get back to you!
      </p>
      <div className="flex justify-center space-x-12">
        <a href="mailto:kadevirgil@gmail.com" className="primary-btn">
          Contact Me <FaMailBulk className="text-sky-400 inline-block ml-2" />
        </a>
        <a
          href={pdf}
          download="Kade Virgil Resume.pdf"
          target="_blank"
          className="primary-btn"
        >
          Download Resume{" "}
          <FaFileDownload className="text-sky-400 inline-block ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
