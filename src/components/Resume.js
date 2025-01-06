import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Resume</h2>
        <p className="text-sm md:text-lg mb-4">Click below to download my resume.</p>
        <motion.a
          href="/resume.pdf"
          download="Umesh_Kumar_Resume.pdf"
          className="bg-blue-600 text-white py-2 px-4 text-xs sm:text-sm md:text-base rounded shadow-lg hover:bg-blue-700 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaDownload className="mr-2" size={16} /> Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Resume;
