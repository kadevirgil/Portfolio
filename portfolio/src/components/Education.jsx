import React from "react";
import wsu from "../assets/wsu-claw.png";

// TODO: Add education inView animation

const Education = () => {
  const degrees = [
    {
      school: "Weber State University",
      major: "B.S. in Computer Science",
      graduation: "Expected Graduation: Fall 2024",
      gpa: "GPA: N/A",
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

  return (
    <section id="education" className="container mx-auto scroll-mt-24 px-6">
      <h2 className="mb-6 text-3xl font-bold text-white">Education</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {degrees.map((degree, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:shadow-2xl"
          >
            <h4 className="ed-heading mb-2">
              <img
                src={wsu}
                alt={`${degree.school} Claw Logo`}
                className="wsu-img mr-2 inline-block"
              />
              <span className="text-indigo-500">{degree.school}</span>{" "}
              {degree.location}
            </h4>
            <p className="text-gray-400">
              <span className="ed-major">{degree.major}</span>
              <br />
              <span className="italic">{degree.graduation}</span>
              <br />
              <span className="text-gray-300">{degree.gpa}</span>
            </p>
            <p className="mt-4 text-gray-400">Coursework:</p>
            <ul className="flex flex-wrap">
              {degree.coursework &&
                degree.coursework.map((coursework, courseworkIndex) => (
                  <li
                    key={`${coursework}-${courseworkIndex}`}
                    className="my-2 mr-2 rounded-3xl bg-indigo-900 bg-opacity-50 px-4 py-2 font-serif text-indigo-400 transition-all duration-200 hover:bg-opacity-90"
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

export default Education;
