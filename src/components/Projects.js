import React, { Component } from 'react';
import './Projects.css';
import { ProjectCard } from './ProjectCard';
import Pic1 from '../assets/calculator.png';
import Pic2 from '../assets/ecommerce.jpg';
import Pic3 from '../assets/bicycle.png';
import Pic4 from '../assets/resume.jpg';
import { FaBorderNone } from 'react-icons/fa';

export class Projects extends Component {

    constructor() {
        super();
        this.state = {
            numOfRepos: 0,
            name1: null
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/Kriistoffer/repos')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    numOfRepos: json.length
                    // name1: json.name[0]
                })
            });
    }

    render() {
        return (

            <div className="projects-section" id="projects">
                <div className="top-section">Antal respositories på min GitHub just nu: <div className="repo-text"> {this.state.numOfRepos} </div></div>
                <div className="card-div">
                    <ProjectCard
                        src={Pic1}
                        alt="calculator"
                        CardTitle="ConsoleAppCalculator"
                        CardSubtitle="Inlämningsuppgift i skolan."
                        CardText="En skoluppgift där vi skulle skapa en väldigt simpel miniräknare som en konsollapplikation med endast de mest grundläggande funktionerna."
                        a="https://github.com/Kriistoffer/ConsoleAppCalculator"
                    />
                </div>

                <div className="card-div">
                    <ProjectCard
                        src={Pic2}
                        alt="ecommerce"
                        CardTitle="eHandel"
                        CardSubtitle="Grupparbete i skolan."
                        CardText="En skoluppgift där vi skulle skapa en online-shop där man kunde navigera sig fram i en konsollapplikation för att köpa olika produkter."
                        a="https://github.com/Kriistoffer/eHandel"
                    />
                </div>

                <div className="card-div">
                    <ProjectCard
                        src={Pic3}
                        alt="bicycle"
                        CardTitle="BicycleRental"
                        // CardTitle={this.state.name1}
                        CardSubtitle="Inlämningsuppgift i skolan."
                        CardText="En skoluppgift där jag skapade en applikation som man kunde hyra cyklar genom. Applikationen är kopplad till en databas med all information."
                        a="https://github.com/Kriistoffer/BicycleRental"
                    />
                </div>

                <div className="card-div">
                    <ProjectCard
                        src={Pic4}
                        alt="resume"
                        CardTitle="WebApplicationCV"
                        CardSubtitle="Inlämningsuppgift i skolan."
                        CardText="En skoluppgift där vi skulle designa och skapa en personlig hemsida/online CV med hjälp utav ett JavaScript-ramverk. Min personliga hemsida
                        är skriven i React.js."
                        a="https://github.com/Kriistoffer/WebApplicationCV"
                    />
                </div>

            </div>
        );
    }
}