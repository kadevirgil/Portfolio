// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-800 to-gray-900 cursor-default"
    >
      {/* <img
        src="https://avatar.iran.liara.run/public/42"
        className="w-32 md:w-48 lg:w-52 my-5 black hover:animate-spin transition-all"
        alt="Kade"
      /> */}
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Hi, I'm <span className="text-accent">Kade Virgil</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-400">
        I'm a fullstack developer specializing in building exceptional web
        applications.
      </p>
      <div className="flex ">
        <a href="#about" className="primary-btn">
          View My Work <span className="text-sky-400">--&gt;</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
