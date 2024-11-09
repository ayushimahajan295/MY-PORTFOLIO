import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }} 
        transition={{ duration: 1.5 }}
      >
        Experience
      </motion.h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }} 
            transition={{ duration: 0.75, delay: index * 0.05 }}
          >
            <div className="w-full lg:w-1/4">
              <motion.p
                className="mb-2 text-sm text-neutral-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                {experience.duration}
              </motion.p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                className="mb-2 font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }} 
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {experience.role} - {" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </motion.h6>
              <motion.p
                className="mb-4 text-neutral-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }} 
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {experience.description}
              </motion.p>
              <div>
                {experience.skills.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }} 
                    transition={{
                      duration: 0.5,
                      delay: index * 0.5 + techIndex * 0.2,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
