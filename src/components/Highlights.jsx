import React from "react";
import { CERTIFICATIONS, LANGUAGES, ACHIEVEMENTS } from "../constants";
import { motion } from "framer-motion";

const MotionSection = ({ children, initial, whileInView, transition, delay }) => (
  <motion.div
    initial={initial}
    whileInView={whileInView}
    viewport={{ once: true }}
    transition={transition}
    style={{ marginBottom: "10px" }}
  >
    {children}
  </motion.div>
);

const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 }
};

function Highlights() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <MotionSection
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h2 
          className="my-20 text-center text-4xl"
          variants={fadeInDown}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5 }}
        >
          Achievements, Certifications & Languages
        </motion.h2>
      </MotionSection>

      <section className="mb-10">
        <MotionSection
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h3 
            className="my-10 text-center text-4xl"
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
          >
            Achievements
          </motion.h3>
        </MotionSection>
        <motion.ul
          className="list-disc pl-8 space-y-3 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.li
              className="text-lg"
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.15 }}
            >
              {achievement}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section className="mb-10">
        <MotionSection
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h3
            className="my-10 text-center text-4xl"
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
          >
            Certifications
          </motion.h3>
        </MotionSection>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          {CERTIFICATIONS.map((certification, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg shadow-lg mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.15 }}
            >
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4"
              >
                <img
                  src={certification.image}
                  alt={certification.name}
                  className="w-16 h-16 mb-4 rounded-lg"
                />
              </a>
              <h4 className="text-xl font-semibold text-center">{certification.name}</h4>
              <p className="text-md text-center text-neutral-400 mb-4">
                {certification.year}
              </p>
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mb-10">
        <MotionSection
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            className="my-10 text-center text-4xl"
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
          >
            Languages
          </motion.h3>
        </MotionSection>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.05 }}
        >
          {LANGUAGES.map((language, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg shadow-lg mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.05 }}
            >
              <h4 className="text-xl font-semibold text-center">{language.name}</h4>
              <p className="text-md text-center text-neutral-400">
                {language.proficiency}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Highlights;