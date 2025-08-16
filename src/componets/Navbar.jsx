/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Works" },
    { id: "contact", label: "Contact" },
  ];

  const socialMedia = [
    { id: "twitter", label: "Twitter", url: "https://twitter.com" },
    { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com" },
    { id: "github", label: "GitHub", url: "https://github.com" },
  ];

  // Fade navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <h1 className="font-mono text-black cursor-pointer">Markus</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={600}
                offset={-64}
                spy={true}
                className="text-gray-700 hover:text-[#FF6F61] cursor-pointer transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-[3px] bg-gray-700 rounded"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-[3px] bg-gray-700 rounded"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] md:hidden bg-white px-5 py-7 border-t border-gray-200 z-40 overflow-y-auto"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                },
              }}
              className="flex flex-col space-y-7"
            >
              {menuItems.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={600}
                    offset={-64}
                    spy={true}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 text-4xl hover:text-[#FF6F61] cursor-pointer transition"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <hr className="border-gray-300 my-6" />

            {/* Social Media Links */}
            <ul className="flex flex-col space-y-3 font-bold">
              {socialMedia.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-xl hover:text-[#FF6F61] transition"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
