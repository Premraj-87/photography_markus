import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="cont-container min-h-screen flex flex-col justify-between px-6 md:px-20 py-12 bg-gray-50 text-gray-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-2xl font-semibold mb-4 text-left"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h1>

        <motion.h2
          className="text-lg md:text-xl text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to bring your vision to life—let’s collaborate! Open for work
          and creative opportunities.
        </motion.h2>
      </motion.div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between gap-12 mt-12 flex-grow">
        {/* Left Info */}
        <motion.div
          className="md:w-1/2 space-y-4"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p>
            <span className="font-semibold">Phone:</span> +1 (555) 123-4567
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            markus.photography@example.com
          </p>
          <p>
            <span className="font-semibold">Address:</span> 123 Creative Lane,
            New York, NY 10001, USA
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form className="flex flex-col relative">
            <label htmlFor="name" className="mt-4 mb-2 font-medium">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              required
              className="border-b border-gray-400 focus:outline-none focus:border-black py-2 mb-4 bg-transparent"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />

            <label htmlFor="email" className="mt-4 mb-2 font-medium">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              className="border-b border-gray-400 focus:outline-none focus:border-black py-2 mb-4 bg-transparent"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />

            <label htmlFor="message" className="mt-4 mb-2 font-medium">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows="4"
              required
              className="border-b border-gray-400 focus:outline-none focus:border-black py-2 mb-12 bg-transparent resize-none"
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            ></motion.textarea>

            {/* Button in Left Bottom */}
            <motion.button
              type="submit"
              className="absolute bottom-0 left-0 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-2">Connect with Me</h3>
        <p className="text-gray-700">
          Follow me on social media for the latest updates and projects:
        </p>
        <ul className="flex space-x-6 mt-4">
          <motion.li whileHover={{ scale: 1.1 }}>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              Twitter
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              LinkedIn
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              Instagram
            </a>
          </motion.li>
        </ul>
      </motion.div>

      {/* Bottom Note */}
      <motion.footer
        className="text-center mt-8 text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        © 2025 Markus
      </motion.footer>
    </div>
  );
};

export default Contact;
