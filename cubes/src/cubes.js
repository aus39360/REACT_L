import React, { Component } from 'react'
import './cubes.css'

class Cubes extends Component {
    render() {
        return(
            <i className={`die fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : ''}`}></i>
        )
    }
}

export default Cubes;