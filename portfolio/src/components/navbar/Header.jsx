import React from "react";
import OutlineButton from "../../common/OutlineButton";
import resume from "../../assets/Kade-Virgil-Resume.pdf";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between px-4 pl-14 md:pl-24 bg-opacity-50 backdrop-blur-md">
      <MyLinks />
      <OutlineButton
        className="border-sky-500 text-sky-500 before:bg-sky-500 hover:text-slate-800"
        onClick={() => {
          window.open(resume);
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
