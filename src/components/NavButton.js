import React, { Component } from 'react';
import './NavButton.css';

export class NavButton extends Component {

    render() {
        return (

            <button
                className="nav-btn">{this.props.value}</button>

        );
    }
}