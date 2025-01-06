import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Me</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <motion.a
            href="https://linkedin.com/in/umesh-kumar3140"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin size={32} />
          </motion.a>
          <motion.a
            href="https://github.com/u0m5e0s9h"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={32} />
          </motion.a>
          <motion.a
            href="mailto:umeshc0509@gmail.com"
            className="hover:text-blue-400"
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope size={32} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
