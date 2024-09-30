import React from "react";
// Import OutlineButton component for displaying outline button
import OutlineButton from "../../common/OutlineButton";
// Icons for LinkedIn and GitHub
import { FaLinkedin, FaGithub } from "react-icons/fa";

// DESCRIPTION: Header component for displaying header
// Contains links to GitHub and LinkedIn and button to view resume
export const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between px-4 pl-14 md:pl-24 bg-opacity-50 backdrop-blur-md">
      <MyLinks />
      <OutlineButton
        className="border-sky-500 text-sky-500 before:bg-sky-500 hover:text-slate-800"
        onClick={() => {
          window.open("https://docs.google.com/document/d/1Gi3MuQArswhm6WfYMojbXh9t4uzCUQIE-VULCV_xjDU/edit?usp=sharing");
        }}
      >
        My Resume
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center gap-4 text-lg">
    <a
      className="transition-colors hover:text-sky-300"
      href="https://www.linkedin.com/in/kade-virgil/"
      target="_blank"
      rel="nofollow"
    >
      <FaLinkedin className="size-8"/>
    </a>
    <a
      className="transition-colors hover:text-sky-300"
      href="https://github.com/kadevirgil"
      target="_blank"
      rel="nofollow"
    >
      <FaGithub className="size-8" />
    </a>
  </div>
);

export default Header;
