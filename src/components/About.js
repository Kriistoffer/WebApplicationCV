import React, { Component } from 'react';
import './About.css';
import About_photo from '../assets/about_pic.jpg';

export class About extends Component {
    render() {
        return (
            <section className="about-section" id="about">
                <div className="about-area">
                    <div className="top-section">
                        <div className="photo-section">
                            <img src={About_photo} alt="profile of me" className="about-photo" />
                        </div>

                        <div className="photo-text">
                            <h1 className="h1-text">Namn: Kristoffer Johansson</h1>
                            <h1 className="h1-text">Ålder: 28 år</h1>
                            <h1 className="h1-text">Bor: Kungälv</h1>
                        </div>

                    </div>

                    <div className="bottom-section">
                        <div className="text-section">
                            <p className="p-text">Mitt namn är Kristoffer Johansson. Blabla bla bla blablabla. Blabla bla bla blablabla. Blabla bla bla blablabla. 
                            Blabla bla bla blablabla. Blabla bla bla blablabla. Blabla bla bla blablabla. Blabla bla bla blablabla. Blabla bla bla blablabla. Blabla bla bla blablabla. 
                            Blabla bla bla blablabla. Blabla bla bla blablabla. Blabla bla bla blablabla. Blabla bla bla blablabla. 
                            Blabla bla bla blablabla. Blabla bla bla blablabla. Blabla bla bla blablabla. Blabla bla bla blablabla. </p>

                            <p className="p-text">asdhaksd aksdhaksjdh kajhsdkashd kajhsdakd kjahsdkajhsd kjahsdkajhsd jkhasdkahds kjhasdkjha jkhasdkjahd kjahsdkjas</p>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}