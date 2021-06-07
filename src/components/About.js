import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './About.css';
import About_photo from '../assets/about_pic.jpg';
import WordCloud from './TagCloud';



export class About extends Component {
    render() {
        return (
            <div className="about-section div-border" id="about">
                <div className="about-area div-border">
                    <div className="top-section div-border">
                        <div className="photo-section div-border">
                            <img src={ About_photo } alt="Me" className="about-photo" />
                        </div>
                    </div>
                    <div className="bottom-section div-border">
                        <div className="text-section div-border">
                            <p className="about-text">Mitt namnn är Kristoffer Johansson. Jag är tjugoåtta år gammal och studerar objektorienterad systemutveckling i Göteborg. 
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}