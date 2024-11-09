import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiMongodb, SiPostman } from 'react-icons/si';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const slideInVariants = (direction) => ({
  hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
  visible: { opacity: 1, x: 0 },
});

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        className='my-20 text-center text-4xl'
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: false }}  
        transition={{ duration: 1.5 }}
      >
        Skills
      </motion.h2>

      <div className='text-center mb-10'>
        <motion.h3
          className='text-3xl mb-6'
          variants={fadeInDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}  
          transition={{ duration: 1.5 }}
        >
          Technical Skills
        </motion.h3>
        
        <div className='flex flex-wrap items-center justify-center gap-8'>
          {[ 
            { icon: <FaReact className='text-7xl text-cyan-400' />, label: 'React', duration: 2.5 },
            { icon: <FaHtml5 className='text-7xl text-orange-500' />, label: 'HTML5', duration: 3 },
            { icon: <FaCss3Alt className='text-7xl text-blue-500' />, label: 'CSS3', duration: 2 },
            { icon: <SiCplusplus className='text-7xl text-blue-600' />, label: 'C++', duration: 3.2 },
            { icon: <FaJava className='text-7xl text-orange-700' />, label: 'Java', duration: 2.8 },
            { icon: <FaDatabase className='text-7xl text-blue-700' />, label: 'SQL', duration: 3.1 },
            { icon: <SiMongodb className='text-7xl text-green-500' />, label: 'MongoDB', duration: 2.7 },
            { icon: <SiPostman className='text-7xl text-orange-500' />, label: 'Postman', duration: 3.3 },
          ].map(({ icon, label, duration }, index) => (
            <motion.div
              key={index}
              variants={slideInVariants('left')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}  
              transition={{ duration: 1.5, delay: index * 0.1 }}
              className='text-center'
            >
              <motion.div
                variants={iconVariants(duration)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'
              >
                {icon}
              </motion.div>
              <p className='mt-2'>{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='mt-10 text-center'>
        <motion.h3
          className='text-3xl mb-6'
          variants={fadeInDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}  
          transition={{ duration: 1.5 }}
        >
          Soft Skills
        </motion.h3>

        <div className='flex flex-wrap justify-center gap-8'>
          {['Communication Skills', 'Research Skills', 'Leadership', 'Collaboration & Teamwork'].map((skill, index) => (
            <motion.span
              key={index}
              variants={slideInVariants('right')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}  
              transition={{ duration: 1.5, delay: index * 0.1 }}
              className='bg-neutral-800 text-white px-4 py-2 rounded-full'
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
