// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="container block mx-auto px-6">
      <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row items-center mb-8 slide-in">
        <img
          src="https://avatar.iran.liara.run/public/42"
          alt="Profile"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-6 md:mb-0 md:mr-8"
        />
        <p className="text-lg text-gray-400">
          I'm a Fullstack Developer with a passion for creating efficient and
          scalable web applications. With a solid foundation in both front-end
          and back-end technologies, I love bringing ideas to life in the
          browser.
        </p>
      </div>
    </section>
  );
};

export default About;
