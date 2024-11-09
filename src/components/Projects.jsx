import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
        className='my-20 text-center text-4xl'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        Projects
      </motion.h2>
      
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            className='mb-8 flex flex-wrap lg:justify-center'
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: index * 0.05 }}
          >
            <div className='w-full lg:w-1/4'>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <img src={project.image} width={200} height={200} alt={project.title} className='mb-6 rounded' />
              </a>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
