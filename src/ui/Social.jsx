import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
function Social() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-row  w-max justify-center items-center  text-white text-3xl gap-2 rounded-full"
    >
      {/* <motion.span
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ type: "spring", duration: 0.5, stiffness: 300 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
      >
        <a href="https://leetcode.com/u/__ritik__saini/" target="_blank">
          {" "}
          <img src="./1.png" className="h-7 w-7" />
        </a>
      </motion.span> */}
      <motion.span
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ type: "spring", duration: 0.5, stiffness: 300 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
      >
        <a
          href="https://www.linkedin.com/in/khushi-alodhan-a82906283/"
          target="_blank"
        >
          <img src="./3.png" className="h-7 w-7" />
        </a>
      </motion.span>
      <motion.span
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ type: "spring", duration: 0.5, stiffness: 300 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
      >
        <a href="https://github.com/khushialodhan17" target="_blank">
          <FaGithub />
        </a>
      </motion.span>
    </motion.div>
  );
}

export default Social;
