import React, { Component } from 'react'
import './Color.css'
import {help} from './helpers_money.js';

class Color extends Component {
    static defaultProps = {
        AllColors: ['blue', 'red', 'brown', 'purple', 'pink', 'magenta', 'green', 'yellow', 'black', 'grey']
    }
    constructor(props) {
        super(props);
        this.state = { color: help(this.props.AllColors) }
        this.handleClick = this.handleClick.bind(this)
    }
    generation() {
        let newColor; 
        do{
            newColor = help(this.props.AllColors);
        } while ( newColor === this.state.color)
        this.setState({ color: newColor});
    };
    handleClick() {
        this.generation();
    };
    render() {
        return(
            <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>
        )
    }
}

export default Color;