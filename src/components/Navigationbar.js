import React, { useState } from 'react';
import Logo from '../assets/profile_pic.png';
import './Navigationbar.css';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaAlignJustify } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { NavButton } from './NavButton';
import MyCV from '../assets/cv_kristoffer_johansson.pdf';


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
                        offset={0}
                        duration={500}>
                        <img src={Logo} className="profilepic" alt="Navigation bar logo of me" />
                    </Link>
                </div>
                <div className="nav-links" id={showLinks ? "hidden" : ""}>
                    <Link onClick={() => setShowLinks(!showLinks)}
                        activeClass="active"
                        to="about"
                        spy={false}
                        smooth={true}
                        offset={-150} //-130
                        duration={500}>
                        <NavButton value="Om" />
                    </Link>
                    {/* <Link onClick={() => setShowLinks(!showLinks)}
                        activeClass="active"
                        to="work"
                        spy={false}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <NavButton value="Arbete" />
                    </Link> */}
                    <Link onClick={() => setShowLinks(!showLinks)}
                        activeClass="active"
                        to="projects"
                        spy={false}
                        smooth={true}
                        offset={-240}
                        duration={500}>
                        <NavButton value="Projekt" />
                    </Link>
                </div>
                <FaAlignJustify className="ham-menu" id="ham" size="2em" onClick={() => setShowLinks(!showLinks)} />
            </div>

            <div className="rightSide">
                <div className="contact-icons">
                    <a href="mailto:kjohansson93@hotmail.se">
                        <IoIosMail size="3em" className="mail-icon" />
                    </a>
                    <a href="https://github.com/Kriistoffer" target="_blank" rel="noreferrer">
                        <FaGithub size="3em" className="github-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/kristoffer-johansson-5735591a0/" target="_blank" rel="noreferrer">
                        <FaLinkedin size="3em" className="linkedin-icon" />
                    </a>
                    <a href={MyCV} download="cv_kristoffer_johansson.pdf">
                        <button className="nav-dl-cv">Ladda ner CV</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navigationbar