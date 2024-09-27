import React from "react";
import { motion } from "framer-motion";

export const SideBarLink = ({
  setSelected,
  selected,
  children,
  href,
  value,
}) => {
  return (
    <motion.a
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
      href={href}
      onClick={() => setSelected(value)}
      className={`writing-vertical flex h-24 w-full shrink-0 items-center justify-center border-r-2 text-sm transition-all ${
        selected === value
          ? "opcaity-100 border-sky-500 bg-zinc-800"
          : "border-transparent opacity-50 hover:border-r-zinc-50 hover:bg-zinc-900"
      }`}
    >
      {children}
    </motion.a>
  );
};

export default SideBarLink;
