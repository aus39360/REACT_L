import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props);
        let a = Math.random() * 90 - 45;
        let x = Math.random() * 40 - 20;
        let y = Math.random() * 40 - 20;
        this.transform = `translate(${x}px, ${y}px) rotate(${a}deg)`
    }
    render() {
        return(
            <img style={{transform: this.transform}} className='card' src={this.props.image} alt={this.props.name} />
        )
    }
}

export default Card;