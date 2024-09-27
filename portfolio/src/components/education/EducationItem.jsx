import React from "react";
import Reveal from "../../common/Reveal";

export const EducationItem = ({
  school,
  level,
  major,
  graduationDate,
  gpa,
  coursework,
}) => {
  return (
    <div className="mb-6 border-b border-zinc-700 pb-6 last:border-b-0 last:pb-0">
      <div className="mb-2 block md:flex items-center justify-between">
        <Reveal>
          <span className="text-md md:text-2xl font-bold">{level}</span>
        </Reveal>
        <Reveal>
          <span>{graduationDate}</span>
        </Reveal>
      </div>
      <div className="text-sm md:text-md mb-2 block md:flex items-center justify-between">
        <Reveal>
          <span className="text-sky-300">{major}</span>
        </Reveal>
        <Reveal>
          <span>{school}</span>
        </Reveal>
      </div>
      {/* Check if GPA exists */}
      {gpa && (
        <div className="mb-4 flex items-center justify-between">
          <Reveal>
            <span>{gpa}</span>
          </Reveal>
        </div>
      )}
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {coursework.map((course, index) => (
            <span
              key={index}
              className="rounded-lg text-sm md:text-md bg-sky-900 bg-opacity-50 px-2 py-1 text-sky-400"
            >
              {course}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
