import React, { Component } from 'react'
import './cubes.css'

class Cubes extends Component {
    render() {
        return(
                <div className={`die fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : ''}`}></div>
        )
    }
}

export default Cubes;