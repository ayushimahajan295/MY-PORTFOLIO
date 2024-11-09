import React from 'react';
import aboutImg from '../assets/about.png';
import { ABOUT_TEXT, EDUCATION } from '../constants';
import { motion } from 'framer-motion';

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        className="my-20 text-center text-4xl"
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5 }}
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      
      <div className="flex flex-wrap justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }} 
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About me"
            className="rounded-2xl border-4 border-gray-700 shadow-lg"
          />
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: 100 }} 
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <p className="my-2 max-w-xl py-6 text-center lg:text-left">{ABOUT_TEXT}</p>
        </motion.div>
      </div>

      <motion.h2
        className="my-10 text-center text-4xl"
        variants={fadeInDown}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5 }}
      >
        Education
      </motion.h2>

      <div className="flex flex-col items-center">
        {EDUCATION.map((education, index) => (
          <motion.div
            key={index}
            className="w-full max-w-xl mb-6 flex items-center"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}  // Ensures the animation triggers every time the element comes into view
            transition={{ duration: 0.75, delay: index * 0.2 }}
          >
            <div className="w-1/4 flex justify-center">
              <img 
                src={education.logo} 
                alt={`${education.institution} logo`} 
                className="rounded-lg border-2 border-gray-700 shadow-md w-12 h-12" 
              />
            </div>
            <div className="w-3/4 pl-4">
              <h3 className="font-semibold text-xl text-center lg:text-left">{education.institution}</h3>
              <p className="text-neutral-500 text-center lg:text-left">{education.degree}</p>
              <p className="text-neutral-400 text-center lg:text-left">{education.duration}</p>
              <p className="mt-2 text-neutral-600 text-center lg:text-left">{education.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
