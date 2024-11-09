import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import ResumeDownload from './components/ResumeDownload'; 

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-400 selection:text-cyan-900 relative min-h-screen w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="highlights">
          <Highlights />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div>
          <ResumeDownload />
        </div>
      </div>
    </div>
  );
}  