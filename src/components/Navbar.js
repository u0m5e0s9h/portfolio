import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-gray-900 text-white p-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h2 className="text-xl font-bold">Umesh Kumar</h2>
        <ul className="flex flex-wrap space-x-4 md:space-x-6 text-sm md:text-base">
          <li><a href="#intro" className="hover:text-blue-400">Home</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#resume" className="hover:text-blue-400">Resume</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
