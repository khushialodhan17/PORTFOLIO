import { useRef } from "react";
import ImageContainer from "./ImageContainer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Buttonn from "./Buttonn";
import Btn2 from "./Btn2";

function Projects() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], ["2%", "-70%"]);

  const x = useSpring(rawX, {
    stiffness: 60,
    damping: 50,
    mass: 1,
  });

  return (
    <div className="carousel h-[700vh] bg-white pt-10 " ref={targetRef}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="text-7xl font-bold text-black text-center  translate-y-7 "
      >
        PROJECTS
      </motion.h1>

      <div className="carousel-container h-screen sticky top-0 flex items-center justify-start overflow-hidden">
        <motion.div className="images flex gap-4 px-4" style={{ x }}>
          <motion.div
            className="image-item flex-shrink-0 w-[60vw]"
            whileHover={{ width: 1400 }}
            onClick={() =>
              window.open("https://quick-show-vercel.vercel.app/", "_blank")
            }
          >
            <ImageContainer
              imageSource={"pro3.png"}
              description={"hello world"}
            />
          </motion.div>
          <motion.div
            className="image-item flex-shrink-0 w-[60vw]"
            whileHover={{ width: 1200 }}
            onClick={() =>
              window.open("https://flexshelf.vercel.app/", "_blank")
            }
          >
            <ImageContainer
              imageSource={"pro2.png"}
              description={"hello world"}
            />
          </motion.div>{" "}

          <motion.div
            className="image-item flex-shrink-0 w-[60vw]"
            whileHover={{ width: 1400 }}
            onClick={() =>
              window.open(
                "https://leet-code-buddy-trial-web-page-main-tan.vercel.app/",
                "_blank"
              )
            }
          >
            <ImageContainer
              imageSource={"pro6.png"}
              description={"hello world"}
            />
          </motion.div>

          <motion.div
            className="image-item flex-shrink-0 w-[60vw]"
            whileHover={{ width: 1400 }}
            onClick={() =>
              window.open(
                "https://khushialodhan17.github.io/Createch/",
                "_blank"
              )
            }
          >
            <ImageContainer
              imageSource={"smartmaritime.png"}
              description={"hello world"}
            />
          </motion.div>

          <motion.div
            className="image-item flex-shrink-0 w-[60vw]"
            whileHover={{ width: 1400 }}
            onClick={() =>
              window.open(
                "https://pg-life-easy-accommodation.netlify.app/",
                "_blank"
              )
            }
          >
            <ImageContainer
              imageSource={"pg-life.png"}
              description={"hello world"}
            />
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
