import React, { useState } from 'react';
import Logo from '../assets/profile_pic.png';
import './Navigationbar.css';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaAlignJustify } from 'react-icons/fa';
import { Component } from 'react';
import { NavButton } from './NavButton';


function Navigationbar() {

    const [showLinks, setShowLinks] = useState(false);


    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="logo-area">
                    <a href="/" onClick={() => setShowLinks(!showLinks)}>
                        <img src={Logo} alt="logo of me" className="logo" />
                    </a>
                </div>
                <div className="nav-links" id={showLinks ? "hidden" : ""}>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={false}
                        smooth={true}
                        offset={0} //-130
                        duration={500}>
                        <NavButton value="Om" />
                    </Link>
                    <Link
                        activeClass="active"
                        to="work"
                        spy={false}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <NavButton value="Arbete" />
                    </Link>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={false}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <NavButton value="Projekt" />
                    </Link>
                    {/* <a href="/About" className="nav-button" onClick={() => setShowLinks(!showLinks)}>Om</a>
                    <a href="/Work" className="nav-button" onClick={() => setShowLinks(!showLinks)}>Arbete</a>
                    <a href="/Projects" className="nav-button" onClick={() => setShowLinks(!showLinks)}>Projekt</a> */}
                </div>
                {/* <button onClick={()=> setShowLinks(!showLinks)}><FaAlignJustify /></button> */}
                <FaAlignJustify className="ham-menu" id="ham" size="2em" onClick={() => setShowLinks(!showLinks)} />
            </div>

            <div className="rightSide">
                <div className="contact-icons">
                    <FaGithub size="3em" className="github-icon" />
                    <FaLinkedin size="3em" className="linkedin-icon" />
                </div>
            </div>
        </div>
    )
}

export default Navigationbar