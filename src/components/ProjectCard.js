import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export class ProjectCard extends Component {
    render() {
        return (
                <Card>
                    <CardImg top width="318px" height="180px" src={this.props.src} alt={this.props.alt} />
                    <CardBody>
                        <CardTitle tag="h5">{this.props.CardTitle}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.CardSubtitle}</CardSubtitle>
                        <CardText>{this.props.CardText}</CardText>
                        <a href={this.props.a} target="_blank" rel="noreferrer">
                            <Button>Länk till projektet på GitHub</Button>
                        </a>
                    </CardBody>
                </Card>
        );
    }
}

