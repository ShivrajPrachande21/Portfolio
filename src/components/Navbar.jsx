import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} alt="Logo" className="w-[100px]" />
                </a>
            </div>
            {/* Links Section */}
            <div className="hidden md:flex items-center justify-center gap-4 text-1xl">
                <Link to="projects" smooth={true} duration={500}>
                    <p className="cursor-pointer">Projects</p>
                </Link>
                <Link to="experience" smooth={true} duration={500}>
                    <p className="cursor-pointer">Experience</p>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    <p className="cursor-pointer">Contact</p>
                </Link>
            </div>
            {/* Social Links Section */}
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/shivraj-prachande-635ab0217"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/ShivrajPrachande21"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/shivrajprachande21/"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
