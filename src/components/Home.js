import React, { Component } from 'react';
import './Home.css';
import TypeWriterEffect from 'react-typewriter-effect';

export class Home extends Component {
    render() {
        return (
            <div className="home-section" id="home">
                <div className="intro-firstname">
                    Kristoffer
                </div>
                <div className="intro-lastname">
                    Johansson
                </div>
                <div classname="intro-subtext">
                <TypeWriterEffect
                        textStyle={{ fontFamily: '',
                        color: "white",
                        fontSize: "2em" }}
                        startDelay={1500}
                        cursorColor="white"
                        text="Studerande inom objektorienterad programmering..</>"
                        typeSpeed={100}
                        scrollArea={document} />
                </div>
            </div>
        );
    }
}