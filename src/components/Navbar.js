import React, { Component } from 'react';
import Logo from '../assets/profile_pic.png';
import './Navbar.css';
import { Link } from 'react-scroll';

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar-side">
                <div className="logo">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                            <img src={ Logo } className="profilepic" alt="Logo" />
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
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                    <button className="nav-btn">Om</button>
                    </Link>

                    <Link
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                    <button className="nav-btn">Arbete</button>
                    </Link>

                    <Link
                        activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                    <button className="nav-btn">Utbildning</button>
                    </Link>

                    <Link
                        activeClass="active"
                        to="qualifications"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                    <button className="nav-btn">Kvalifikationer</button>
                    </Link>

                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                    <button className="nav-btn">Projekt</button>
                    </Link>
                </div>
                <div className="nav-bottom">
                    <button className="nav-dl-cv">Ladda ner CV</button>
                    <div className="contact-area">
                        {/* <p>Links to Git, LinkedIn</p> */}
                    </div>
                </div>
            </div>
        );
    }
}