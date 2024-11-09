import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from "../assets/ayushiMahajanLogo.png";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-6 mb-20 mx-2 flex items-center justify-between w-full">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-10 mx-2 md:h-12 transition-all duration-300" />
      </div>
      <div className="flex items-center gap-6 text-2xl text-white ml-auto">
        <ul className="hidden md:flex gap-6">
          <li className='h-10'><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='h-10'><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li className='h-10'><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li className='h-10'><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
          <li className='h-10'><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li className='h-10'><Link to="highlights" smooth={true} duration={500}>Highlights</Link></li>
          <li className='h-10'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div className={`md:hidden absolute top-0 right-0 bg-black w-full h-screen flex items-center justify-center transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`} style={{ zIndex: 1000 }}>
        <ul className="flex flex-col items-center gap-6 text-xl text-white">
          <li><Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link></li>
          <li><Link to="experience" smooth={true} duration={500} onClick={toggleMenu}>Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="highlights" smooth={true} duration={500} onClick={toggleMenu}>Highlights</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
