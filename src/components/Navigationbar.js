import React, { useState } from 'react';
import Logo from '../assets/profile_pic.png';
import './Navigationbar.css';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaAlignJustify } from 'react-icons/fa';
import { Component } from 'react';


function Navigationbar() {

    const [showLinks, setShowLinks] = useState(false);


    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="logo-area">
                        <img src={ Logo } alt="logo of me" className="logo" />
                    </div>
                <div className="nav-links" id={ showLinks ? "hidden" : ""}>
                    {/* <a href="/">Home</a> */}
                    <a href="/" className="nav-button" onClick={()=> setShowLinks(!showLinks)}>Home</a>
                    <a href="/About" className="nav-button" onClick={()=> setShowLinks(!showLinks)}>About</a>
                    <a href="/Projects" className="nav-button" onClick={()=> setShowLinks(!showLinks)}>Projects</a>
                </div>
                {/* <button onClick={()=> setShowLinks(!showLinks)}><FaAlignJustify /></button> */}
                <FaAlignJustify className="ham-menu" size="2em" onClick={()=> setShowLinks(!showLinks)}/>
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