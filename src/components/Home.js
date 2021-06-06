import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';
import TypeWriterEffect from 'react-typewriter-effect';

export class Home extends Component {
    render() {
        return (
            <div className="home-section div-border" id="home">
                <div className="intro-firstname">
                    <p>Kristoffer</p>
                </div>
                <div className="intro-lastname">
                    <p>Johansson</p>
                </div>
                <div className="intro-text">
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: 'VT323',
                            color: "white",
                            fontSize: "2vw"
                        }}
                        startDelay={1500}
                        cursorColor="white"
                        text="Studerande inom objektorienterad programmering..</>"
                        typeSpeed={100}
                        scrollArea={document} />
                </div>
            </div>
            // <section className="home-section" id="home">
            //     <div className="home">
            //         <div className="intro-firstname">
            //             Kristoffer
            //     </div>
            //         <div className="intro-lastname">
            //             Johansson
            //     </div>
            //         <div className="row1">
            //             <div className="column1"></div>
            //             <div classname="intro-text">
            //                 <TypeWriterEffect
            //                     textStyle={{
            //                         fontFamily: 'VT323',
            //                         color: "white",
            //                         fontSize: "2vw"
            //                     }}
            //                     startDelay={1500}
            //                     cursorColor="white"
            //                     text="Studerande inom objektorienterad programmering..</>"
            //                     typeSpeed={100}
            //                     scrollArea={document} />
            //             </div>
            //         </div>
            //     </div>
            // </section>
        );
    }
}