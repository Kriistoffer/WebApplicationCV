import React, { Component } from 'react';
import Logo from '../assets/profile_pic.png';
import './Navbar.css';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavButton } from './NavButton';

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar-side">
                <div className="logo">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={false}
                        smooth={true}
                        offset={-300}
                        duration={500}>
                        <img src={Logo} className="profilepic" alt="Logo" />
                    </Link>
                </div>
                <div className="namespace">
                    <p className="nametag1">Kristoffer</p>
                    <p className="nametag2">Johansson</p>
                </div>
                <div className="nav-items">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={false}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        <NavButton value="Om"/>
                    </Link>

                    <Link
                        activeClass="active"
                        to="work"
                        spy={false}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <NavButton value="Arbete"/>
                    </Link>

                    <Link
                        activeClass="active"
                        to="education"
                        spy={false}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <NavButton value="Utbildning"/>
                    </Link>

                    <Link
                        activeClass="active"
                        to="qualifications"
                        spy={false}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <NavButton value="Kvalifikationer"/>
                    </Link>

                    <Link
                        activeClass="active"
                        to="projects"
                        spy={false}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <NavButton value="Projekt"/>
                    </Link>
                </div>
                <div className="nav-bottom">
                    <button className="nav-dl-cv">Ladda ner CV</button>
                    <div className="contact-area">
                        <a href="https://github.com/Kriistoffer" target="_blank">
                        <FaGithub className="contact-icon" size="3em" color="white"/>
                        </a>
                        <FaLinkedin className="contact-icon2" size="3em" color="white"/>
                    </div>
                </div>
            </div>
        );
    }
}