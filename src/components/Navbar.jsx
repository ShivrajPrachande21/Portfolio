import React from 'react';
import { Link, Element } from 'react-scroll';

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo.png';
const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} alt="" className='w-[100px]' />
                </a>
            </div>
            <div className="flex items-center justify-center gap-4 text-1xl">
            <Link to="projects" smooth={true} duration={500}>
            <p className='cursor-pointer'>Projects</p>
        </Link>
        <Link to="experience" smooth={true} duration={500}>
        <p className='cursor-pointer'>Experience</p>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
        <p className='cursor-pointer'>Contact</p>
        </Link>
              
              

            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/shivraj-prachande-635ab0217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                    href="https://www.instagram.com/shivrajprachande21/profilecard/?igsh=MThkcWJ2bGc0ajRxNw=="
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
                {/* <a
                    href="https://www.linkedin.com/in/your-linked"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <FaTwitter />
                </a> */}
            </div>
        </div>
    );
};

export default Navbar;
