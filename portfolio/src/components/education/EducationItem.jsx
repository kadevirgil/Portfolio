import React from "react";
import Reveal from "../../util/Reveal";

export const EducationItem = ({
  school,
  major,
  graduationDate,
  gpa,
  coursework,
}) => {
  return (
    <div className="mb-6 border-b last:border-b-0 last:pb-0 border-zinc-700 pb-6">
      <div className="mb-2 flex items-center justify-between">
        <Reveal>
          <span className="text-2xl font-bold">{school}</span>
        </Reveal>
        <Reveal>
          <span>{graduationDate}</span>
        </Reveal>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <Reveal>
          <span className="text-sky-300">{major}</span>
        </Reveal>
        <Reveal>
          <span>{gpa}</span>
        </Reveal>
      </div>
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {coursework.map((course, index) => (
            <span
              key={index}
              className="rounded-lg bg-sky-900 bg-opacity-50 px-2 py-1 text-sky-400"
            >
              {course}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
