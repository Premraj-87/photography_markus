import React from "react";
import { motion } from "framer-motion";
import image4 from "../assets/images/image4.png";

const About = () => {
  return (
    <section className="about-sec flex flex-col gap-6 p-4 md:h-screen">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-semibold"
      >
        About my personal photography journey
      </motion.h2>

      {/* Subheading */}
      <motion.h3
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl lg:text-2xl lg:w-1/2 lg:ml-auto lg:mt-6 text-right"
      >
        I believe every image holds a powerful story. Through my lens, I capture
        emotions, light, and life. Get to know the person who brings these
        moments to life.
      </motion.h3>

      {/* Main content: Image + Text */}
      <div className="flex flex-col md:flex-row items-start gap-12 mt-6">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4"
        >
          <img
            src={image4}
            alt="About my photography journey"
            className="w-full h-auto object-cover shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-1 text-base md:text-lg lg:text-xl leading-relaxed"
        >
          I’m Markus, a passionate photographer dedicated to capturing beauty
          and emotion in every moment. With years of experience behind the
          camera, I create images that tell unique stories. My work combines
          creativity, technical skill, and a deep understanding of light and
          composition. I believe every photograph should evoke feeling and
          preserve memories that last a lifetime.
          <br />
          <br />
          From candid portraits to stunning landscapes, I aim to capture life’s
          authentic moments. Photography is not just my profession but a true
          form of art and personal expression. I continually seek new inspiration
          and enjoy collaborating with clients to bring their vision to life. My
          goal is to create images that resonate and connect on a deeper level.
        </motion.div>
      </div>
    </section>
  );
};

export default About;
