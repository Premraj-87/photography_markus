import React from "react";
import { motion } from "framer-motion";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h4 className="text-1xl font-semibold">My Projects</h4>
      </div>

      <motion.div
        className="flex flex-col lg:flex-row gap-5 p-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={fadeUp}
      >
        {/* Left: Project 1 image */}
        <motion.div
          className="lg:w-1/2"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={image5}
            alt="Project 1"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right: Project 2 images + text */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-4 lg:flex lg:justify-center lg:p-5"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Images row */}
          <div className="flex gap-2">
            <motion.img
              src={image6}
              alt="Project 2"
              className="w-1/3 h-auto"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.5 }}
            />
            <motion.img
              src={image7}
              alt="Project 2"
              className="w-1/3 h-auto"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.7 }}
            />
            <motion.img
              src={image8}
              alt="Project 2"
              className="w-1/3 h-auto"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.9 }}
            />
          </div>

          {/* Text */}
          <motion.p
            className="text-gray-800 text-base leading-relaxed"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 1 }}
          >
            A showcase of my photographic journey — where art meets storytelling.
            These works highlight my passion for capturing life’s genuine moments.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
