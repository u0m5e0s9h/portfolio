import React from 'react';
import { motion } from 'framer-motion';

const Introd= () => {
  return (
    <motion.section
      id="intro"
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 md:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Umesh Kumar
        </motion.h1>
        <motion.p
          className="text-sm md:text-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Full-stack Developer | MERN Stack Enthusiast | Problem Solver
        </motion.p>
        <motion.button
          className="mt-6 bg-white text-blue-600 py-2 px-4 rounded shadow-lg hover:bg-gray-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Work
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Introd;
