import React from "react";
import wsu from "../assets/wsu-claw.png";
import { SectionHeader } from "../util/SectionHeader";
import { EducationItem } from "../components/education/EducationItem";

// TODO: Add education inView animation
const Education = () => {
  return (
    <section id="education" className="container mx-auto scroll-mt-24 px-6">
      <SectionHeader title="EDUCATION" dir="r" />
      {degrees.map((degree, index) => (
        <EducationItem
          key={index}
          school={degree.school}
          major={degree.major}
          graduationDate={degree.graduation}
          gpa={degree.gpa}
          coursework={degree.coursework}
        />
      ))}
    </section>
  );
};

// TODO: Clean up the data (remove placeholder gpa, coursework, etc.)
// Education data
const degrees = [
  {
    school: "Weber State University",
    major: "B.S. in Computer Science",
    graduation: "Fall 2024",
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
    graduation: "December 2023",
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
    graduation: "December 2023",
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
    graduation: "April 2022",
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

export default Education;
