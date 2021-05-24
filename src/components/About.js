import React, { Component } from 'react';
import './About.css';
import Aboutpic from '../assets/about_pic.jpg';

export class About extends Component {
    render() {
        return (
            <body className="background">
                <div className="about-section" id="about">
                    <div className="about-photo">
                        <img src={ Aboutpic } className="about-photo" alt="Photo of me" id="left-div"/>
                        <div className="about-text" id="right-div">
                            <p>Namn: Kristoffer Johansson.</p>
                            <p>Ålder: 28 år.</p>
                            <p>Bor: Kungälv.</p>
                        </div>
                    </div>
                    <div className="text-area">
                        <h1 className="about-text">OM MIG</h1>
                        <p className="about-text">
                            Mitt namn är Kristoffer Johansson. Text text text. Text text text. Text text text. Text text text. Text text text. {"\n"}
                            Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. {"\n"}
                            Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. 
                            Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. 
                            Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. {"\n"}
                        </p>
                    </div>
                </div>
            </body>
        );
    }
}