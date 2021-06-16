import React, { Component } from 'react';
import './About.css';
import About_photo from '../../assets/about_pic.jpg';
import WordCloud from '../../components/TagCloud';



export class About extends Component {
    render() {
        return (
            <div className="about-section" id="about">
                <div className="photo-section">
                    <img src={About_photo} alt="Me" className="about-photo" />
                </div>

                <div className="about-text">
                    <p>Mitt namn är Kristoffer Johansson, jag är tjugoåtta år gammal och studerar objektorienterad systemutveckling i Göteborg. Jag är en driven och målmedveten
                        person som väldigt gärna lär sig nya saker och ger sig på nya utmaningar i livet. </p>

                    <p>Jag har tidigare studerat en del matematik och fysik, men ägnar mig idag åt systemutveckling. </p>
                </div>

                <div className="wordcloud-section">
                    <WordCloud />
                </div>
            </div>
        );
    }
}