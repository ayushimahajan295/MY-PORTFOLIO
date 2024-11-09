import React from 'react';
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h2
        className="my-10 text-center text-4xl"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        transition={{ duration: 1.5 }}
      >
        Get in touch
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.p
          className="my-4"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: false }} 
          transition={{ duration: 1.5 }}
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          className="my-4"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: false }} 
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          <a href={`tel:${CONTACT.phoneNo}`} className="text-blue-500">
            {CONTACT.phoneNo}
          </a>
        </motion.p>

        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="text-blue-500"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: false }} 
        >
          {CONTACT.email}
        </motion.a>

        <motion.div
          className="flex justify-center gap-6 text-3xl mt-8"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: false }} 
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/ayushi-mahajan-5bb879282/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ayushimahajan295"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.hackerrank.com/profile/ayushi_mahajan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <FaHackerrank />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
