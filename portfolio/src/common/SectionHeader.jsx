// src/util/SectionHeader.jsx
import React from "react";
import { Reveal } from "./Reveal";

export const SectionHeader = ({ title, dir = "r" }) => {
  return (
    <div
      className="flex items-center gap-4"
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className="h-[1px] w-full bg-zinc-700" />
      <h2>
        <Reveal>
          <span className="text-3xl font-black text-white md:text-5xl">
            {title}
            <span className="text-sky-500">.</span>
          </span>
        </Reveal>
      </h2>
    </div>
  );
};
