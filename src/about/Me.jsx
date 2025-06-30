import { motion } from "motion/react";
import { useRef } from "react";

function Me() {
  const aboutRef = useRef(null);
  return (
    <motion.div
      ref={aboutRef}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col text-white items-start justify-end w-1/2 h-[400px] p-4 ml-4 gap-1"
    >
      <h1 className="text-6xl font-bold">Hey!Khushi Alodhan this side</h1>
      <h3 className="text-3xl font-semibold">Indira Gandhi Delhi Technical University for Women</h3>
      <h3 className="text-3xl font-semibold">Delhi,India</h3>
    </motion.div>
  );
}

export default Me;
