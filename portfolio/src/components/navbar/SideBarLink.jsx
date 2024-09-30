import React from "react";
// Import motion for animations
import { motion } from "framer-motion";

// DESCRIPTION: SideBarLink component for displaying each sidebar link
// PROPS: setSelected, selected, children, href, value
// setSelected: function to set the selected value
// selected: current selected value
// children: children of the component
// href: href of the link
// value: Text value of the link
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
