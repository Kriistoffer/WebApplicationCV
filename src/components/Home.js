import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';
import TypeWriterEffect from 'react-typewriter-effect';

export class Home extends Component {
    render() {
        return (

            <Container className="home-section">
                <Row>
                    <Col className="intro-firstname">
                        <p>Kristoffer</p>
                    </Col>
                </Row>

                <Row>
                    <Col className="intro-lastname">
                        <p>Johansson</p>
                    </Col>
                </Row>

                <Row>
                    <Col className="intro-text">
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
                    </Col>
                </Row>
            </Container>

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