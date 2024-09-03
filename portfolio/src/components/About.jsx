// src/components/About.jsx
import React from "react";
import wsu from "../assets/wsu-claw.png";

const degrees = [
  {
    school: "Weber State University",
    major: "B.S. in Computer Science",
    graduation: "Expected Graduation: Fall 2024",
    gpa: "GPA: 3.59/4.00",
    coursework: [
      "Data Structures & Algorithms",
      "Objects & Design",
      "Computer Organization & Programming",
      "Object-Oriented Programming",
      "Calculus",
      ".NET Frameworks",
      "Operating Systems",
    ],
  },
  {
    school: "Weber State University",
    major: "A.A.S. in Computer Science",
    graduation: "Graduated: December 2023",
    gpa: "GPA: 3.59/4.00",
    coursework: [
      "Data Structures & Algorithms",
      "Objects & Design",
      "Computer Organization & Programming",
      "Combinatorics",
      "Object-Oriented Programming",
      "Calculus",
      "Computer Architecture",
    ],
  },
  {
    school: "Weber State University",
    major: "Certificate of Proficiency in Programming Essentials",
    graduation: "Graduated: December 2023",
    gpa: "GPA: N/A",
    coursework: [
      "Core programming courses",
      "Data Structures & Algorithms",
      "Introduction to CS",
      "Front-End Development",
      "HTML/CSS",
    ],
  },
  {
    school: "Weber State University",
    major: "A.S. in General Studies",
    graduation: "Graduated: April 2022",
    gpa: "GPA: 3.59/4.00",
    coursework: [
      "Mathematics",
      "History",
      "English",
      "Political Science",
      "Health",
      "Science",
    ],
  },
];

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {degrees.map((degree, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h4 className="ed-heading mb-2">
              <img
                src={wsu}
                alt={`${degree.school} Claw Logo`}
                className="wsu-img inline-block mr-2"
              />
              <span className="text-indigo-500">{degree.school}</span>
              {" "}{degree.location}
            </h4>
            <p className="text-gray-400">
              <span className="ed-major">{degree.major}</span>
              <br />
              <span className="italic">{degree.graduation}</span>
              <br />
              <span className="text-gray-300">{degree.gpa}</span>
            </p>
            <p className="text-gray-400 mt-4">Coursework:</p>
            <ul className="flex flex-wrap">
              {degree.coursework && degree.coursework.map((coursework, courseworkIndex) => (
                <li
                  key={`${coursework}-${courseworkIndex}`}
                  className="bg-opacity-50 bg-indigo-900 text-indigo-400 px-4 py-2 mr-2 my-2 rounded-3xl font-serif hover:bg-opacity-90 transition-all duration-200"
                >
                  {coursework}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
