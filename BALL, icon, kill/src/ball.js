import React, { Component } from 'react'
import './ball.css'

class Ball extends Component {
    render() {
        return(
            <div className="ball">{this.props.num}</div>
        )
    }
}

export default Ball;