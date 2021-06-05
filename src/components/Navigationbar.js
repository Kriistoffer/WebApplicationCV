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
                    {/* onClick always to false to prevent the hamburger menu to open by pressing the logo.
                        The logo only closes the hamburger menu if it's opened when the logo is pressed. */}
                    <Link onClick={() => setShowLinks(false)}
                        activeClass="active"
                        to="home"
                        spy={false}
                        smooth={true}
                        offset={-300}
                        duration={500}>
                        <img src={ Logo } className="profilepic" alt="Navigation bar logo of me" />
                    </Link>
                </div>
                <div className="nav-links" id={showLinks ? "hidden" : ""}>
                    <Link onClick={() => setShowLinks(!showLinks)}
                        activeClass="active"
                        to="about"
                        spy={false}
                        smooth={true}
                        offset={0} //-130
                        duration={500}>
                        <NavButton value="Om" />
                    </Link>
                    <Link onClick={() => setShowLinks(!showLinks)}
                        activeClass="active"
                        to="work"
                        spy={false}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <NavButton value="Arbete" />
                    </Link>
                    <Link onClick={() => setShowLinks(!showLinks)}
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