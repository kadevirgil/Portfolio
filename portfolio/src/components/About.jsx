// src/components/About.jsx
import React from "react";

// Images
import wsu from "../assets/wsu-claw.png";

const About = () => {
  return (
    <section id="about" className="snap-center container mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row items-center mb-8">
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

      <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
      <div className="ed-container">
        <div>
          <h4 className="ed-heading">
            <img
              src={wsu}
              alt="Weber State University Claw Logo"
              className="wsu-img"
            />
            <span className="text-indigo-500">Weber State University</span>,
            Ogden, Utah
          </h4>
          <p>
            <span className="ed-major">B.S. in Computer Science</span>
            <br />
            <span className="italic">Expected Graduation: Fall 2024</span>
            <br />
            <span className="text-gray-300">GPA: 3.59/4.00</span>
          </p>
          <p className="mt-2">
            <span className="font-semibold">Related Coursework:</span> Data
            Structures & Algorithms, Objects & Design, Computer Organization &
            Programming, Object-Oriented Programming, Calculus, .NET Frameworks,
            Operating Systems
          </p>
        </div>

        <div>
          <h4 className="ed-heading">
            <img
              src={wsu}
              alt="Weber State University Claw Logo"
              className="wsu-img"
            />
            <span className="text-indigo-500">Weber State University</span>,
            Ogden, Utah
          </h4>
          <p>
            <span className="ed-major">A.A.S. in Computer Science</span>
            <br />
            <span className="italic">Graduated: December 2023</span>
            <br />
            <span className="text-gray-300">GPA: 3.59/4.00</span>
          </p>
          <p className="mt-2">
            <span className="font-semibold">Related Coursework:</span> Data
            Structures & Algorithms, Objects & Design, Computer Organization &
            Programming, Combinatorics, Object-Oriented Programming, Calculus,
            Computer Architecture
          </p>
        </div>

        <div>
          <h4 className="ed-heading">
            <img
              src={wsu}
              alt="Weber State University Claw Logo"
              className="wsu-img"
            />
            <span className="text-indigo-500">Weber State University</span>,
            Ogden, Utah
          </h4>
          <p>
            <span className="font-semibold">
              Certificate of Proficiency in Programming Essentials
            </span>
            <br />
            <span className="italic">Graduated: December 2023</span>
            <br />
            <span className="text-gray-300">GPA: N/A</span>
          </p>
          <p className="mt-2">
            <span className="font-semibold">Related Coursework:</span> Core
            programming courses, Data Structures & Algorithms, Introduction to
            CS, Front-End Development, HTML/CSS
          </p>
        </div>

        <div>
          <h4 className="ed-heading">
            <img
              src={wsu}
              alt="Weber State University Claw Logo"
              className="wsu-img"
            />
            <span className="text-indigo-500">Weber State University</span>,
            Ogden, Utah
          </h4>
          <p>
            <span className="font-semibold">A.S. in General Studies</span>
            <br />
            <span className="italic">Graduated: April 2022</span>
            <br />
            <span className="text-gray-300">GPA: 3.59/4.00</span>
          </p>
          <p className="mt-2">
            <span className="font-semibold">Related Coursework:</span>{" "}
            Mathematics, History, English, Political Science, Health, Science
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
