import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ['ReactJS', 'Node.js', 'MongoDB', 'C/C++', 'DSA', 'Express.js'];

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 shadow-md rounded hover:bg-blue-500 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
