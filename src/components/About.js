import React, { Component } from 'react';
import './About.css';
import Aboutpic from '../assets/about_pic.jpg';

export class About extends Component {
    render() {
        return (
            <body className="background">
                <div className="about-section" id="about">
                    <h1 className="text">This is my about page</h1>
                    <div className="about-photo">
                        <img src={ Aboutpic } className="about-photo" alt="Photo of me"/>
                    </div>
                    <div className="text-area">
                        <h1 className="about-text">OM MIG</h1>
                        <p className="about-text">
                            Mitt namn är Kristoffer Johansson. 
                        </p>
                    </div>
                </div>
            </body>
        );
    }
}