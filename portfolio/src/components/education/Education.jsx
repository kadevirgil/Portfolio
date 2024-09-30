import React from "react";
// Import SectionHeader component for displaying section header
import { SectionHeader } from "../../common/SectionHeader";
// Import EducationItem component for displaying each education item
import { EducationItem } from "./EducationItem";

// DESCRIPTION: Education component for displaying education section
// Loops through each object in the degrees array and displays 
// an EducationItem Component for each object
const Education = () => {
  return (
    <section id="education" className="container mx-auto scroll-mt-24">
      <SectionHeader title="EDUCATION" dir="r" />
      {degrees.map((degree, index) => (
        <EducationItem
          key={index}
          school={degree.school}
          level={degree.level}
          major={degree.major}
          graduationDate={degree.graduation}
          gpa={degree.gpa}
          coursework={degree.coursework}
        />
      ))}
    </section>
  );
};

// Education data
const degrees = [
  {
    school: "Weber State University",
    level: "Bachelor of Science",
    major: "Computer Science",
    graduation: "December 2024",
    gpa: "GPA: 3.62",
    coursework: [
      "Operating Systems",
      "Advanced Database Programming",
      "Scripting Languages",
      "Server-Side Web Architecture",
      "Advanced Software Engineering",
      "Data Science Algorithms",
      "Formal Languages & Algorithms",
      "Advanced Calculus",
      "MERN Stack Development",
      "Full-Stack Web Development",
    ],
  },
  {
    school: "Weber State University",
    level: "Associate of Applied Science",
    major: "Computer Science",
    graduation: "December 2023",
    gpa: "GPA: 3.58",
    coursework: [
      "Data Structures & Algorithms",
      "Objects & Design",
      "Computer Organization & Programming",
      "Combinatorics",
      "Object-Oriented Programming",
      "Calculus",
      "Computer Architecture & Organization",
      "Intro to Database Design & SQL",
      "Client Side Web Development",
      "Network Fundamentals & Design",
      "Computational Structures",
      "Software Engineering",
    ],
  },
  {
    school: "Weber State University",
    level: "Certificate of Proficiency",
    major: "Programming Essentials",
    graduation: "December 2023",
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
    level: "Associate of Science",
    major: "General Studies",
    graduation: "April 2022",
    gpa: "GPA: 3.56",
    coursework: [
      "Mathematics",
      "History",
      "English",
      "Political Science",
      "Health",
      "Science",
      "Anthropology",
      "Geology",
      "Astronomy",
      "Communications",
    ],
  },
];

export default Education;
